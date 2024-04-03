import { Component, Input, OnInit } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { Actions, Controllers } from '../../../shared/global-variables/api-config';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { DynamicListInput } from '../../../shared/models/dynamic-list.model';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { ListActionTypeEnum } from '../../../shared/enums/enums';
import { ListActionClickedOutput } from '../../../shared/models/list-action-clicked-output';
import { YesNoDialogComponent } from '../../../shared/shared-components/yes-no-dialog/yes-no-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-brand-list',
  templateUrl: './client-brand-list.component.html',
  styleUrls: ['./client-brand-list.component.css']
})
export class ClientBrandListComponent implements OnInit {

  constructor(private dynamicService: DynamicDataService,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private router: Router
  ) { }
  @Input() clientId: number;
  public dynamicFormInput = new DynamicFormInput();
  public dynamicListInput = new DynamicListInput();
  public isLoading = true;
  public pageSize = 10;
  public pageNumber = 1;
  public brands: FieldListData[] = [];
  public areasList: any[] = [];
  public areaGroups: FieldListData[] = [];
  ngOnInit(): void {
    this.spinner.show();
    this.getFormData();

  }
  public getFormData() {
    this.dynamicService.getFormSettings('ClientBrandSearchForm').subscribe(res => {
      this.dynamicFormInput = res;
      this.getListSettings();
    });
  }
  public getListSettings() {
    this.dynamicService.getListSettings('ClientBrandsList').subscribe(res => {
      this.dynamicListInput = res;
      this.getListData();
    });
  }
  public getListData(pageSize?: number, pageNumber?: number) {
    let request = {
      pageSize: pageSize ? pageSize : this.pageSize,
      pageNumber: pageNumber ? pageNumber : this.pageNumber,
      clientId: Number(this.clientId)
    }
    this.baseService.postItem(Controllers.ClientBrand, Actions.GetList, request).subscribe(res => {
      this.brands = res.entities;
      this.dynamicListInput.data = this.brands;
      this.dynamicListInput.totalCount = res.totalCount;
      this.isLoading = false;
      this.spinner.hide();
    });
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.pageSize = this.pageSize;
    event.data.pageNumber = this.pageNumber;
    event.data.clientId = Number(this.clientId);
    this.baseService.postItem(Controllers.ClientBrand, Actions.GetList, event.data).subscribe(res => {
      this.areasList = res.entities;
      this.dynamicListInput.data = this.areasList;
      this.dynamicListInput.totalCount = res.totalCount;
      this.isLoading = false;
      this.spinner.hide();
    })
  }
  public serveListAction(event: ListActionClickedOutput) {
    switch (event.action) {
      case ListActionTypeEnum.Delete:
        {
          const dialogRef = this.dialog.open(YesNoDialogComponent, {
            width: '400px',
            data: {
              title: 'confirm',
              content: 'confirmDeleteMessage'
            }
          })

          dialogRef.afterClosed().subscribe(res => {
            if (res) {
              this.spinner.show();

              this.baseService.removeItemById(Controllers.ClientBrand, event.entityId).subscribe(res => {
                this.getListData(this.pageSize, this.pageNumber);
                this.isLoading = false;
                this.spinner.hide();
                console.log(res);
                this.notification.showNotification(res, 'success')
              }, error => {
                if (error.status === 400) {
                  this.notification.showNotification(error.error, 'danger');
                }
                else {
                  this.notification.showNotification('somethingWentWrong', 'danger');
                }
                this.spinner.hide();
              });
            }
          })

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
