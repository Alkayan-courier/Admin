import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import {
  Actions,
  Controllers,
} from '../../../shared/global-variables/api-config';
import { BaseService } from '../../../shared/services/base.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { NotificationService } from '../../../shared/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { ActionTypeEnum, FieldTypeEnum } from '../../../shared/enums/enums';

@Component({
  selector: 'app-city-update',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.css'],
})
export class CityUpdateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dynamicService: DynamicDataService,
    private notification: NotificationService,
    private router: Router
  ) {}
  public cityId: number;
  public isLoading = true;
  public cities: FieldListData[] = [];
  public areaGroups: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.spinner.show();
    this.route.params.subscribe((params) => {
      this.cityId = params.id;

      this.getAsync(this.cityId);
    });
  }
  public getAsync(id: number) {
    this.baseService.getById(Controllers.City, id).subscribe((res) => {
      this.getFieldsData(res);
    });
  }

  public getFieldsData(city: any) {
    this.dynamicFormInput = {
      formFields: [
        {
          fieldId: 'nameEn',
          fieldType: FieldTypeEnum.Input,
          label: 'nameEn',
          fieldOrder: 1,
          value: '',
          placeholder: 'nameEn',
          options: { disabled: false, required: true, size: 2 },
        },
        {
          fieldId: 'nameAr',
          fieldType: FieldTypeEnum.Input,
          label: 'nameAr',
          fieldOrder: 2,
          value: '',
          placeholder: 'nameAr',
          options: { disabled: false, required: true, size: 2 },
        },
      ],
      actions: [
        {
          actionName: 'Edit',
          actionType: ActionTypeEnum.Submit,
          isDisableAllowed: false,
        },
      ],
    };
    this.dynamicFormInput.formFields.forEach((field) => {
      field.value = city[field.fieldId];
    });
    this.spinner.hide();
    this.isLoading = false;
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.id = Number(this.cityId);
    this.baseService.editItem(Controllers.City, event.data).subscribe(
      (res) => {
        this.spinner.hide();
        this.notification.showNotification(res, 'success');
        this.router.navigate(['/forms/city-list']);
      },
      (error) => {
        if (error.status === 400) {
          this.notification.showNotification(error.error, 'danger');
        } else {
          this.notification.showNotification('somethingWentWrong', 'danger');
        }
        this.spinner.hide();
      }
    );
  }
}
