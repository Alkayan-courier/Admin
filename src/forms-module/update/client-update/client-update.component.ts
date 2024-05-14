import { Component, OnInit } from '@angular/core';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { BaseService } from '../../../shared/services/base.service';
import {
  Actions,
  Controllers,
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
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css'],
})
export class ClientUpdateComponent implements OnInit {
  public dynamicFormInput = new DynamicFormInput();
  public isLoading = true;
  public roles: FieldListData[] = [];
  public clientId: number;
  public baseStatuses = [];
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  constructor(
    private dynamicService: DynamicDataService,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private notification: NotificationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.spinner.show();
    this.route.params.subscribe((params) => {
      this.clientId = params.id;
      this.baseStatuses = [
        { value: true, viewValueEn: 'Active', viewValueAr: 'نشط' },
        { value: false, viewValueEn: 'Not Active', viewValueAr: 'غير نشط' },
      ];
      this.getAsync(this.clientId);
    });
    this.spinner.show();
  }
  public getAsync(id: number) {
    this.baseService.getClientById(Controllers.User, id).subscribe((res) => {
      console.log(res);
      this.getFieldsData(res);
    });
  }
  public serveAction(event: DynamicFormOutput) {
    event.data['role'] = this.userRolesEnum.Merchant;
    event.data.id = Number(this.clientId);
    let formData = new FormData();
    Object.entries(event.data).forEach((element) => {
      var file;
      if (element[0] == 'bankVerifecationAttachment') {
        file = element[1] as Blob;
        formData.append(element[0], file);
      } else {
        if (element[1] == null) {
          element[1] = '';
        }
        formData.append(element[0], element[1] as string);
      }
    });
    this.baseService
      .postFormItem(Controllers.User, Actions.UpdateMerchant, formData)
      .subscribe(
        (res) => {
          this.spinner.hide();
          this.notification.showNotification(res, 'success');
          this.router.navigate(['/forms/client-list']);
        },
        (error) => {
          this.spinner.hide();
          this.notification.showNotification(error.error, 'danger');
        }
      );
  }

  public getFieldsData(client: any) {
    this.dynamicFormInput = this.dynamicFormInput = {
      actions: [
        {
          actionName: 'update',
          actionType: ActionTypeEnum.Submit,
          isDisableAllowed: false,
        },
      ],
      formFields: [
        {
          fieldId: 'fullName',
          fieldType: FieldTypeEnum.Input,
          label: 'FullName',
          fieldOrder: 1,
          placeholder: 'FullName',
          options: { disabled: false, required: true, size: 3 },
        },
        {
          fieldId: 'email',
          fieldType: FieldTypeEnum.Email,
          label: 'Email',
          fieldOrder: 1,
          placeholder: 'Email',
          options: { disabled: false, required: true, size: 3 },
        },
        {
          fieldId: 'phoneNumber',
          fieldType: FieldTypeEnum.Input,
          label: 'PhoneNumber',
          fieldOrder: 1,
          placeholder: 'PhoneNumber',
          options: { disabled: false, required: true, size: 3 },
        },
        {
          fieldId: 'address',
          fieldType: FieldTypeEnum.Input,
          label: 'Address',
          fieldOrder: 1,
          placeholder: 'Address',
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
        {
          fieldId: 'cardHolderName',
          fieldType: FieldTypeEnum.Input,
          label: 'cardHolderName',
          fieldOrder: 1,
          placeholder: 'cardHolderName',
          options: { disabled: false, required: true, size: 3 },
        },
        {
          fieldId: 'bankName',
          fieldType: FieldTypeEnum.Input,
          label: 'bankName',
          fieldOrder: 1,
          placeholder: 'bankName',
          options: { disabled: false, required: true, size: 3 },
        },
        {
          fieldId: 'iban',
          fieldType: FieldTypeEnum.Input,
          label: 'iban',
          fieldOrder: 1,
          placeholder: 'iban',
          options: { disabled: false, required: true, size: 3 },
        },
        {
          fieldId: 'accountNumber',
          fieldType: FieldTypeEnum.Number,
          label: 'accountNumber',
          fieldOrder: 1,
          placeholder: 'accountNumber',
          options: { disabled: false, required: true, size: 3 },
        },
        {
          fieldId: 'bankVerifecationAttachment',
          fieldType: FieldTypeEnum.File,
          label: 'bankVerifecationAttachment',
          fieldOrder: 1,
          placeholder: 'bankVerifecationAttachment',
          options: { disabled: false, required: true, size: 3 },
        },
      ],
    };
    this.dynamicFormInput.formFields.forEach((field) => {
      field.value = client[field.fieldId];
    });
    let statusField = this.dynamicFormInput.formFields.find(
      (x) => x.fieldId == 'isActive'
    );

    statusField.data = this.baseStatuses;
    this.isLoading = false;
    this.spinner.hide();
  }
}
