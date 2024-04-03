import { Component, OnInit } from '@angular/core';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { BaseService } from '../../../shared/services/base.service';
import { Controllers, Actions } from '../../../shared/global-variables/api-config';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { RoleTypes } from '../../../shared/enums/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  public dynamicFormInput = new DynamicFormInput();
  public isLoading = true;
  public roles: FieldListData[] = [];
  public areaGroups: FieldListData[] = [];
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  constructor(
    private dynamicService: DynamicDataService,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private notification: NotificationService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.spinner.show();
    this.getFieldsData();
  }
  public serveAction(event: DynamicFormOutput) {
    this.baseService.postItemTextReponse(Controllers.User, Actions.CreateUser, event.data).subscribe(res => {
      this.spinner.hide();
      console.log(this.translate.getDefaultLang());
      this.notification.showNotification(res, 'success');
      this.router.navigate(['/forms/employee-list']);
    }, error => {
      if (error.status === 400) {
        this.notification.showNotification(error.error, 'danger');
      }
      else {
        this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
      }
      this.spinner.hide();
    })
  }

  public getFieldsData() {
    this.baseService.getEmployeeRoles().subscribe(res => {
      this.roles = res;

      this.dynamicService.getFormSettings('EmpCreateForm').subscribe(res => {
        this.dynamicFormInput = res;
        let roleField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'role');
        roleField.data = this.roles;
        this.isLoading = false;
        this.spinner.hide();
      });
    });
  }

}
