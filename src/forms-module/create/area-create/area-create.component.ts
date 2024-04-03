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
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-create',
  templateUrl: './area-create.component.html',
  styleUrls: ['./area-create.component.css']
})
export class AreaCreateComponent implements OnInit {
  public dynamicFormInput = new DynamicFormInput();
  public isLoading = true;
  public cities: FieldListData[] = [];
  public areaGroups: FieldListData[] = [];

  constructor(
    private dynamicService: DynamicDataService,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private notification: NotificationService,
    private router : Router
  ) { }
  ngOnInit(): void {
    this.spinner.show();
    this.getFieldsData();
  }
  public serveAction(event: DynamicFormOutput) {
    this.baseService.postItemTextReponse(Controllers.Area, Actions.PostItem, event.data).subscribe(res => {
      this.spinner.hide();
      this.notification.showNotification(res, 'success');
      this.router.navigate(['/forms/area-list']);
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
    this.baseService.getAllForList(Controllers.City).subscribe(res => {
      this.cities = res;
      this.baseService.getAllForList(Controllers.AreaGroup).subscribe(res  => {
        this.areaGroups = res;
        this.dynamicService.getFormSettings('AreaForm').subscribe(res => {
          this.dynamicFormInput = res;
          let cityIdField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'cityId');
          cityIdField.data = this.cities;
          let areaGroupIdField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'areaGroupId');
          areaGroupIdField.data = this.areaGroups;
          this.isLoading = false;
          this.spinner.hide();
        });
      });
    });
  }
  
}
