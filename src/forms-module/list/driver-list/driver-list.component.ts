import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import {
  Actions,
  Controllers,
} from '../../../shared/global-variables/api-config';
import {
  FieldListData,
  UserResponseModel,
} from '../../../shared/models/dynamic-form-field';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import {
  DynamicListColumn,
  DynamicListInput,
} from '../../../shared/models/dynamic-list.model';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { ListActionClickedOutput } from '../../../shared/models/list-action-clicked-output';
import {
  ActionTypeEnum,
  FieldTypeEnum,
  ListActionTypeEnum,
  RoleTypes,
} from '../../../shared/enums/enums';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from '../../../shared/shared-components/yes-no-dialog/yes-no-dialog.component';
import { NotificationService } from '../../../shared/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { UsersList } from '../../dynamic-data';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css'],
})
export class DriverListComponent implements OnInit {
  public dynamicFormInput = new DynamicFormInput();
  public dynamicListInput = new DynamicListInput();
  public isLoading = true;
  public pageSize = 10;
  public pageNumber = 1;
  public drivers: FieldListData[] = [];
  public driverList: any[] = [];
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  constructor(
    private dynamicService: DynamicDataService,
    private router: Router,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private translate: TranslateService
  ) {}
  public baseStatuses = [];

  ngOnInit(): void {
    this.baseStatuses = [
      { value: true, viewValueEn: 'Active', viewValueAr: 'نشط' },
      { value: false, viewValueEn: 'Not Active', viewValueAr: 'غير نشط' },
    ];
    this.spinner.show();
    this.getFormData();
  }
  public getFormData() {
    this.baseService
      .getItemsByKey(
        Controllers.User,
        Actions.GetAllItems,
        'role',
        this.userRolesEnum.Driver
      )
      .subscribe((res) => {
        this.drivers = res;
        this.dynamicFormInput = {
          actions: [
            {
              actionName: 'search',
              actionType: ActionTypeEnum.Submit,
              isDisableAllowed: false,
            },
            {
              actionName: 'Reset',
              actionType: ActionTypeEnum.Reset,
              isDisableAllowed: false,
            },
          ],
          formFields: [
            {
              fieldId: 'searchValue',
              fieldType: FieldTypeEnum.Input,
              label: 'searchValue',
              fieldOrder: 1,
              placeholder: 'searchValue',
              options: { disabled: false, required: true, size: 3 },
            },
            {
              fieldId: 'userId',
              fieldType: FieldTypeEnum.DropDownList,
              label: 'userId',
              fieldOrder: 1,
              placeholder: 'userId',
              options: { disabled: false, required: true, size: 3 },
            },
            {
              fieldId: 'isActive',
              fieldType: FieldTypeEnum.DropDownList,
              label: 'isActive',
              fieldOrder: 1,
              placeholder: 'isActive',
              options: { disabled: false, required: true, size: 3 },
            },
          ],
        };
        let userIdField = this.dynamicFormInput.formFields.find(
          (x) => x.fieldId == 'userId'
        );
        let statusField = this.dynamicFormInput.formFields.find(
          (x) => x.fieldId == 'isActive'
        );
        userIdField.data = this.drivers;
        statusField.data = this.baseStatuses;
        this.getListSettings();
        // this.dynamicService.getFormSettings('UserSearchForm').subscribe(res => {
        // });
      });
  }
  public getListSettings() {
    const columns: DynamicListColumn[] = [
      {
        columnId: 'phoneNumber',
        columnValue: 'phoneNumber',
        columnName: 'phoneNumber',
        actions: [],
      },
      {
        columnId: 'fullName',
        columnValue: 'fullName',
        columnName: 'fullName',
        actions: [],
      },
      {
        columnId: 'email',
        columnValue: 'email',
        columnName: 'email',
        actions: [],
      },
      {
        columnId: 'statusEn',
        columnValue: 'statusEn',
        columnName: 'statusEn',
        actions: [],
      },
      {
        columnId: 'actions',
        columnValue: 'actions',
        columnName: 'actions',
        actions: [
          { actionName: 'view', actionType: 3 },
          { actionName: 'delete', actionType: 2 },
          { actionName: 'edit', actionType: 1 },
          { actionName: 'activate', actionType: 4 },
        ],
      },
    ];
    this.dynamicListInput.columns = UsersList;
    this.getListData();
    // this.dynamicService.getListSettings('DriverList').subscribe(res => {
    // });
  }
  public getListData(pageSize?: number, pageNumber?: number) {
    let request = {
      pageSize: pageSize ? pageSize : this.pageSize,
      pageNumber: pageNumber ? pageNumber : this.pageNumber,
      role: this.userRolesEnum.Driver,
    };
    this.baseService
      .postItem(Controllers.User, Actions.GetList, request)
      .subscribe((res) => {
        this.driverList = res.entities;
        this.dynamicListInput.data = this.driverList;
        this.dynamicListInput.totalCount = res.totalCount;
        this.isLoading = false;
        this.spinner.hide();
      });
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.pageSize = this.pageSize;
    event.data.pageNumber = this.pageNumber;
    event.data.role = this.userRolesEnum.Driver;
    this.baseService
      .postItem(Controllers.User, Actions.GetList, event.data)
      .subscribe((res) => {
        this.driverList = res.entities;
        this.dynamicListInput.data = this.driverList;
        this.dynamicListInput.totalCount = res.totalCount;
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
              .removeItemById(Controllers.User, event.entityId)
              .subscribe(
                (res) => {
                  this.getListData(this.pageSize, this.pageNumber);
                  this.spinner.hide();
                  console.log(res);
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
        this.router.navigate([`/forms/driver-update/${event.entityId}`]);
        break;
      }
      case ListActionTypeEnum.View: {
        this.router.navigate([`/forms/driver-details/${event.entityId}`]);
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
