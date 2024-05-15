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
import { Router } from '@angular/router';
import { OrderStatusCreateForm } from '../../dynamic-data';

@Component({
  selector: 'app-order-status-create',
  templateUrl: './order-status-create.component.html',
  styleUrls: ['./order-status-create.component.css'],
})
export class OrderStatusCreateComponent implements OnInit {
  constructor(
    private dynamicService: DynamicDataService,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private notification: NotificationService,
    private router: Router
  ) {}
  public dynamicFormInput = new DynamicFormInput();
  public isLoading = true;
  public cities: FieldListData[] = [];
  public areaGroups: FieldListData[] = [];
  ngOnInit(): void {
    this.dynamicFormInput = new DynamicFormInput();
    this.spinner.show();
    this.getFieldsData();
  }
  public serveAction(event: DynamicFormOutput) {
    let formData = new FormData();
    Object.entries(event.data).forEach((element) => {
      var file;
      if (element[0] == 'icon') {
        file = element[1] as Blob;
        formData.append(element[0], file);
      } else {
        formData.append(element[0], element[1] as string);
      }
    });
    this.baseService
      .postFormItem(Controllers.OrderStatus, Actions.PostItem, formData)
      .subscribe(
        (res) => {
          this.spinner.hide();
          this.notification.showNotification(res, 'success');
          this.router.navigate(['/forms/order-status-list']);
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
    this.dynamicFormInput = OrderStatusCreateForm;
    this.isLoading = false;
    this.spinner.hide();
  }
  public getTranslatableText(key: string) {
    var textValue = '';
    this.translate.get(key).subscribe((text: string) => {
      textValue = text;
    });
    return textValue;
  }
}
