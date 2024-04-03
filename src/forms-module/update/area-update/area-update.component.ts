import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { Actions, Controllers } from '../../../shared/global-variables/api-config';
import { BaseService } from '../../../shared/services/base.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { NotificationService } from '../../../shared/services/notification.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-area-update',
  templateUrl: './area-update.component.html',
  styleUrls: ['./area-update.component.css']
})
export class AreaUpdateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dynamicService: DynamicDataService,
    private notification: NotificationService,
    private router : Router
  ) { }
  public areaId: number;
  public isLoading = true;
  public cities: FieldListData[] = [];
  public areaGroups: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.areaId = params.id;
      this.getAsync(this.areaId);
    })
  }
  public getAsync(id: number) {
    this.baseService.getById(Controllers.Area, id).subscribe(res => {
      this.getFieldsData(res);
    })
  }
  public getFieldsData(area: any) {
    this.baseService.getAllForList(Controllers.City).subscribe(res => {
      this.cities = res;
      this.baseService.getAllForList(Controllers.AreaGroup).subscribe(res => {
        this.areaGroups = res;
        this.dynamicService.getFormSettings('AreaForm').subscribe(res => {
          this.dynamicFormInput = res;
          let cityIdField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'cityId');
          cityIdField.data = this.cities;
          let areaGroupIdField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'areaGroupId');
          areaGroupIdField.data = this.areaGroups;
          this.dynamicFormInput.formFields.forEach(field => {
            field.value = area[field.fieldId];
          });
          this.isLoading = false;
          this.spinner.hide();
        });
      });
    });
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.id = Number(this.areaId);
    this.baseService.editItem(Controllers.Area, event.data).subscribe(res => {
      this.spinner.hide();
      this.notification.showNotification(res, 'success');
      this.router.navigate(['/forms/area-list']);
    },error=>{
      if (error.status === 400) {
        this.notification.showNotification(error.error, 'danger');
      }
      else {
        this.notification.showNotification('somethingWentWrong', 'danger');
      }
      this.spinner.hide();
    });
  }
}
