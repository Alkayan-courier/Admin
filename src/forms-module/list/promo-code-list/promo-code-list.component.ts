import { Component, OnInit } from '@angular/core';
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
import { ListActionClickedOutput } from '../../../shared/models/list-action-clicked-output';
import { ListActionTypeEnum } from '../../../shared/enums/enums';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from '../../../shared/shared-components/yes-no-dialog/yes-no-dialog.component';
import { NotificationService } from '../../../shared/services/notification.service';
import { PromoCodeList, PromoCodeSearchForm } from '../../dynamic-data';

@Component({
  selector: 'app-promo-code-list',
  templateUrl: './promo-code-list.component.html',
  styleUrls: ['./promo-code-list.component.css'],
})
export class PromoCodeListComponent implements OnInit {
  constructor(
    private dynamicService: DynamicDataService,
    private router: Router,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private notification: NotificationService
  ) {}
  public dynamicFormInput = new DynamicFormInput();
  public dynamicListInput = new DynamicListInput();
  public isLoading = true;
  public pageSize = 10;
  public pageNumber = 1;
  public expiryTypes: FieldListData[] = [
    { value: 1, viewValueEn: 'Date', viewValueAr: 'التاريخ' },
    { value: 2, viewValueEn: 'Orders Limit', viewValueAr: 'عدد الطلبات' },
  ];
  public promoCodesList: any[] = [];
  ngOnInit(): void {
    this.spinner.show();
    this.getFormData();
    this.getListSettings();
  }
  public getFormData() {
    this.dynamicFormInput = PromoCodeSearchForm;
    let expiryTypeField = this.dynamicFormInput.formFields.find(
      (x) => x.fieldId == 'expiryType'
    );
    expiryTypeField.data = this.expiryTypes;
  }
  public getListSettings() {
    this.dynamicListInput.columns = PromoCodeList;
    this.getListData();
  }
  public getListData(pageSize?: number, pageNumber?: number) {
    let request = {
      pageSize: pageSize ? pageSize : this.pageSize,
      pageNumber: pageNumber ? pageNumber : this.pageNumber,
    };
    this.baseService
      .postItem(Controllers.PromoCode, Actions.GetList, request)
      .subscribe((res) => {
        this.promoCodesList = res.entities;
        this.dynamicListInput.data = this.promoCodesList;
        this.dynamicListInput.totalCount = res.totalCount;
        this.isLoading = false;
        this.spinner.hide();
      });
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.pageSize = this.pageSize;
    event.data.pageNumber = this.pageNumber;
    this.baseService
      .postItem(Controllers.PromoCode, Actions.GetList, event.data)
      .subscribe((res) => {
        this.promoCodesList = res.entities;
        this.dynamicListInput.data = this.promoCodesList;
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
              .removeItemById(Controllers.PromoCode, event.entityId)
              .subscribe(
                (res) => {
                  this.getListData(this.pageSize, this.pageNumber);
                  this.isLoading = false;
                  this.spinner.hide();
                  this.notification.showNotification(
                    'deletePromoCodeSuccess',
                    'success'
                  );
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
        this.router.navigate([`/forms/promo-code-update/${event.entityId}`]);
        break;
      }
      case ListActionTypeEnum.View: {
        this.router.navigate([`/forms/promo-code-details/${event.entityId}`]);
        break;
      }

      default:
        break;
    }
  }
  public pageChanged(event: PageEvent) {
    this.getListData(event.pageSize, event.pageIndex + 1);
  }
}
