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
  selector: 'app-areagroup-update',
  templateUrl: './areagroup-update.component.html',
  styleUrls: ['./areagroup-update.component.css']
})
export class AreaGroupUpdateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dynamicService: DynamicDataService,
    private notification: NotificationService,
    private router : Router
  ) { }
  public areagroupId: number;
  public isLoading = true;
  public cities: FieldListData[] = [];
  public areaGroups: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.spinner.show();
    this.route.params.subscribe(params => {
      this.areagroupId = params.id;

      this.getAsync(this.areagroupId);
    });

  }
  public getAsync(id: number) {
    this.baseService.getById(Controllers.AreaGroup, id).subscribe(res => {
      this.getFieldsData(res);
    });

  }

  public getFieldsData(city: any) {
    this.dynamicService.getFormSettings('AreaGroupForm').subscribe(res => {
      this.dynamicFormInput = res;
      this.dynamicFormInput.formFields.forEach(field => {
        field.value = city[field.fieldId];
      });
      this.spinner.hide();
      this.isLoading = false;
    });

  }
  public serveAction(event: DynamicFormOutput) {
    event.data.id = Number(this.areagroupId);
    this.baseService.editItem(Controllers.AreaGroup, event.data).subscribe(res => {
      this.spinner.hide();
      this.notification.showNotification(res, 'success');
      this.router.navigate(['/forms/areagroup-list']);
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
}
