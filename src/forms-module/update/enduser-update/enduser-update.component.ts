import { Component, OnInit } from '@angular/core';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { BaseService } from '../../../shared/services/base.service';
import { Controllers } from '../../../shared/global-variables/api-config';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { RoleTypes } from '../../../shared/enums/enums';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUserForm } from '../../dynamic-data';

@Component({
  selector: 'app-enduser-update',
  templateUrl: './enduser-update.component.html',
  styleUrls: ['./enduser-update.component.css'],
})
export class EndUserUpdateComponent implements OnInit {
  public baseStatuses = [];
  public dynamicFormInput = new DynamicFormInput();
  public isLoading = true;
  public roles: FieldListData[] = [];
  public clientId: number;
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
    this.baseService.getById(Controllers.User, id).subscribe((res) => {
      this.getFieldsData(res);
    });
  }
  public serveAction(event: DynamicFormOutput) {
    event.data['role'] = this.userRolesEnum.Merchant;
    event.data.id = Number(this.clientId);
    this.baseService.editItem(Controllers.User, event.data).subscribe(
      (res) => {
        this.spinner.hide();
        this.notification.showNotification(res, 'success');
        this.router.navigate(['/forms/endusers-list']);
      },
      (error) => {
        this.spinner.hide();
        this.notification.showNotification(error.error, 'danger');
      }
    );
  }

  public getFieldsData(client: any) {
    this.dynamicFormInput = UpdateUserForm;
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
