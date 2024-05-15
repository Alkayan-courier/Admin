import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import {
  Actions,
  Controllers,
} from '../../../shared/global-variables/api-config';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { DynamicListInput } from '../../../shared/models/dynamic-list.model';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { ListActionTypeEnum, RoleTypes } from '../../../shared/enums/enums';
import { ListActionClickedOutput } from '../../../shared/models/list-action-clicked-output';
import { YesNoDialogComponent } from '../../../shared/shared-components/yes-no-dialog/yes-no-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { OrderList, OrderSearchForm } from '../../dynamic-data';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  constructor(
    private dynamicService: DynamicDataService,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private router: Router
  ) {}
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }

  public orderStatuses: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  public dynamicListInput = new DynamicListInput();
  public isLoading = true;
  public pageSize = 10;
  @ViewChild('excelImporterInput') excelImporterInput: ElementRef;
  dataSource: MatTableDataSource<any>;
  public pageNumber = 1;
  public cities: FieldListData[] = [];
  public drivers: FieldListData[] = [];
  public clients: FieldListData[] = [];
  public areas: FieldListData[] = [];
  public clientBrands: FieldListData[] = [];
  public orders: any[] = [];
  public areaGroups: FieldListData[] = [];
  ngOnInit(): void {
    this.spinner.show();
    this.getFormData();
  }
  public getFormData() {
    this.baseService.getAllForList(Controllers.Order).subscribe((res) => {
      this.orders = res;
      this.baseService
        .getAllForList(Controllers.ClientBrand)
        .subscribe((res) => {
          this.clientBrands = res;
          this.dynamicFormInput = OrderSearchForm;

          var storedForm = JSON.parse(sessionStorage.getItem('searchForm'));
          if (storedForm) {
            this.dynamicFormInput.formFields.find(
              (x) => x.fieldId == 'fromDate'
            ).value = storedForm.fromDate;
            this.dynamicFormInput.formFields.find(
              (x) => x.fieldId == 'toDate'
            ).value = storedForm.toDate;
          }
          this.baseService.getAllForList(Controllers.Area).subscribe((res) => {
            this.areas = res;
            this.baseService
              .getItemsByKey(
                Controllers.User,
                Actions.GetAllItems,
                'role',
                this.userRolesEnum.Merchant
              )
              .subscribe((res) => {
                this.clients = res;
                this.baseService
                  .getItemsByKey(
                    Controllers.User,
                    Actions.GetAllItems,
                    'role',
                    this.userRolesEnum.Driver
                  )
                  .subscribe((res) => {
                    this.drivers = res;
                    this.baseService
                      .getAllForList(Controllers.OrderStatus)
                      .subscribe((res) => {
                        this.orderStatuses = res;
                        let areaIdField = this.dynamicFormInput.formFields.find(
                          (x) => x.fieldId == 'areaId'
                        );
                        areaIdField.data = this.areas;
                        let clientIdField =
                          this.dynamicFormInput.formFields.find(
                            (x) => x.fieldId == 'clientId'
                          );
                        clientIdField.data = this.clients;
                        let driverIdField =
                          this.dynamicFormInput.formFields.find(
                            (x) => x.fieldId == 'driverId'
                          );
                        driverIdField.data = this.drivers;
                        let orderStatusIdField =
                          this.dynamicFormInput.formFields.find(
                            (x) => x.fieldId == 'orderStatusId'
                          );
                        orderStatusIdField.data = this.orderStatuses;
                        let clientBrandIdField =
                          this.dynamicFormInput.formFields.find(
                            (x) => x.fieldId == 'clientBrandId'
                          );
                        clientBrandIdField.data = this.clientBrands;
                        this.getListSettings();
                      });
                  });
              });
          });
        });
    });
  }
  public getListSettings() {
    this.dynamicListInput.columns = OrderList;
    this.getListData();
  }
  public getListData(pageSize?: number, pageNumber?: number) {
    let request = {
      pageSize: pageSize ? pageSize : this.pageSize,
      pageNumber: pageNumber ? pageNumber : this.pageNumber,
    };
    this.baseService
      .postItem(Controllers.Order, Actions.List, request)
      .subscribe((res) => {
        this.orders = res.entities;
        this.dynamicListInput.data = this.orders;
        this.dynamicListInput.totalCount = res.totalCount;
        this.isLoading = false;
        this.spinner.hide();
      });
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.pageSize = this.pageSize;
    event.data.pageNumber = this.pageNumber;
    console.log(event.data);
    sessionStorage.setItem('searchForm', JSON.stringify(event.data));
    this.baseService
      .postItem(Controllers.Order, Actions.GetList, event.data)
      .subscribe((res) => {
        this.orders = res.entities;
        this.dynamicListInput.data = this.orders;
        this.dynamicListInput.totalCount = res.totalCount;
        this.isLoading = false;
        this.spinner.hide();
      });
  }
  public serveListAction(event: ListActionClickedOutput) {
    switch (event.action) {
      case ListActionTypeEnum.Delete: {
        const dialogRef = this.dialog.open(YesNoDialogComponent, {
          width: '400px',
          data: {
            title: 'confirm',
            content: 'confirmDeleteMessage',
          },
        });

        dialogRef.afterClosed().subscribe((res) => {
          if (res) {
            this.spinner.show();
            this.baseService
              .removeItemById(Controllers.Order, event.entityId)
              .subscribe(
                (res) => {
                  this.getListData(this.pageSize, this.pageNumber);
                  this.isLoading = false;
                  this.spinner.hide();
                  this.notification.showNotification(res, 'success');
                },
                (error) => {
                  if (error.status === 400) {
                    this.notification.showNotification(error.error, 'danger');
                  } else {
                    this.notification.showNotification(
                      'somethingWentWrong',
                      'danger'
                    );
                  }
                  this.spinner.hide();
                }
              );
          }
        });

        break;
      }
      case ListActionTypeEnum.Edit: {
        this.router.navigate([`/forms/order-update/${event.entityId}`]);
        break;
      }
      case ListActionTypeEnum.View: {
        this.router.navigate([`/forms/order-details/${event.entityId}`]);
        break;
      }

      default:
        break;
    }
  }
  public readUrl(event: any) {
    this.spinner.show();
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {};
      const formData: FormData = new FormData();
      formData.append('postedFile', event.target.files[0]);
      this.baseService.importFromExcel(formData).subscribe(
        (res) => {
          this.excelImporterInput.nativeElement.value = '';
          this.notification.showNotification(res, 'success');
          this.getListData(this.pageSize, this.pageNumber);
          this.spinner.hide();
        },
        (error) => {
          if (error.status === 400) {
            this.notification.showNotification(error.error, 'danger');
          } else {
            this.notification.showNotification('somethingWentWrong', 'danger');
          }
          this.spinner.hide();
        }
      );
    }
  }
  public pageChanged(event: PageEvent) {
    this.getListData(event.pageSize, event.pageIndex + 1);
  }
}
