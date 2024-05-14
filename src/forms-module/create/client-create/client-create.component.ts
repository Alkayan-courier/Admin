import { Component, OnInit } from '@angular/core';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { BaseService } from '../../../shared/services/base.service';
import {
  Controllers,
  Actions,
} from '../../../shared/global-variables/api-config';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../../shared/services/notification.service';
import {
  ActionTypeEnum,
  FieldTypeEnum,
  RoleTypes,
} from '../../../shared/enums/enums';
import { Router } from '@angular/router';
import { UserCreateForm } from '../../dynamic-data';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
})
export class ClientCreateComponent implements OnInit {
  public dynamicFormInput = new DynamicFormInput();
  public isLoading = true;
  public roles: FieldListData[] = [];
  public areaGroups: FieldListData[] = [];
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  constructor(
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private notification: NotificationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.spinner.show();
    this.getFieldsData();
  }
  public serveAction(event: DynamicFormOutput) {
    event.data['role'] = this.userRolesEnum.Merchant;
    let formData = new FormData();
    Object.entries(event.data).forEach((element) => {
      var file;
      if (element[0] == 'bankVerifecationAttachment') {
        file = element[1] as Blob;
        formData.append(element[0], file);
      } else {
        if (element[0] == null) {
          element[0] = '';
        }
        formData.append(element[0], element[1] as string);
      }
    });
    this.baseService
      .postFormItem(Controllers.User, Actions.CreateClient, formData)
      .subscribe(
        (res) => {
          this.spinner.hide();
          console.log(this.translate.getDefaultLang());
          this.notification.showNotification(res, 'success');
          this.router.navigate(['/forms/client-list']);
        },
        (error) => {
          if (error.status === 400) {
            this.notification.showNotification(error.error, 'danger');
          } else {
            this.notification.showNotification(
              this.translate.instant('somethingWentWrong'),
              'danger'
            );
          }
          this.spinner.hide();
        }
      );
  }

  public getFieldsData() {
    this.dynamicFormInput = UserCreateForm;
    this.isLoading = false;
    this.spinner.hide();
  }
}
