import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { Actions, Controllers } from '../../../shared/global-variables/api-config';
import { FieldListData, UserResponseModel } from '../../../shared/models/dynamic-form-field';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { DynamicListInput } from '../../../shared/models/dynamic-list.model';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { ListActionClickedOutput } from '../../../shared/models/list-action-clicked-output';
import { ListActionTypeEnum, RoleTypes } from '../../../shared/enums/enums';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from '../../../shared/shared-components/yes-no-dialog/yes-no-dialog.component';
import { NotificationService } from '../../../shared/services/notification.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public dynamicFormInput = new DynamicFormInput();
  public dynamicListInput = new DynamicListInput();
  public isLoading = true;
  public pageSize = 10;
  public pageNumber = 1;
  public clients: FieldListData[] = [];
  public clientList: any[] = [];
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  constructor(private dynamicService: DynamicDataService,
    private router: Router,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private translate: TranslateService,
  ) { }
   public baseStatuses=[]; 

  ngOnInit(): void {
    this.baseStatuses=[
      {value:true,viewValueEn:'Active',viewValueAr:'نشط'},
      {value:false,viewValueEn:'Not Active',viewValueAr:'غير نشط'}
    ];
    this.spinner.show();
    this.getFormData();

  }
  public getFormData() {
    this.baseService.getItemsByKey(Controllers.User, Actions.GetAllItems, 'role', this.userRolesEnum.Merchant).subscribe(res => {
      this.clients = res;
      this.dynamicService.getFormSettings('UserSearchForm').subscribe(res => {
        this.dynamicFormInput = res;
        let userIdField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'userId');
        let statusField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'isActive');
        userIdField.data = this.clients;
        statusField.data = this.baseStatuses;
        this.getListSettings();
      });
    });
  }
  public getListSettings() {
    this.dynamicService.getListSettings('ClientList').subscribe(res => {
      this.dynamicListInput = res;
      this.getListData();
    });
  }
  public getListData(pageSize?: number, pageNumber?: number) {
    let request = {
      pageSize: pageSize ? pageSize : this.pageSize,
      pageNumber: pageNumber ? pageNumber : this.pageNumber,
      role:this.userRolesEnum.Merchant
    }
    this.baseService.postItem(Controllers.User, Actions.GetList, request).subscribe(res => {
      this.clientList = res.entities;
      this.dynamicListInput.data = this.clientList;
      this.dynamicListInput.totalCount = res.totalCount;
      this.isLoading = false;
      this.spinner.hide();
    });
  }
  public serveAction(event: DynamicFormOutput) {
    console.log(event);
    
    event.data.pageSize = this.pageSize;
    event.data.pageNumber = this.pageNumber;
    event.data.role = this.userRolesEnum.Merchant;
    this.baseService.postItem(Controllers.User, Actions.GetList, event.data).subscribe(res => {
      this.clientList = res.entities;
      this.dynamicListInput.data = this.clientList;
      this.dynamicListInput.totalCount = res.totalCount;
      this.spinner.hide();
      console.log(res);
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
              this.baseService.removeItemById(Controllers.User, event.entityId).subscribe(res => {
                this.getListData(this.pageSize, this.pageNumber);
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
      case ListActionTypeEnum.Edit:
        {
          this.router.navigate([`/forms/client-update/${event.entityId}`]);
          break;
        }
      case ListActionTypeEnum.View:
        {
          this.router.navigate([`/forms/client-details/${event.entityId}/0`]);
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