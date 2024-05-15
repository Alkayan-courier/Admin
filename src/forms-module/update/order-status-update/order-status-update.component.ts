import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { OrderStatusUpdateForm } from '../../dynamic-data';

@Component({
  selector: 'app-order-status-update',
  templateUrl: './order-status-update.component.html',
  styleUrls: ['./order-status-update.component.css'],
})
export class OrderStatusUpdateComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dynamicService: DynamicDataService,
    private notification: NotificationService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.dynamicFormInput = new DynamicFormInput();
  }
  public Id: number;
  public isLoading = true;
  public cities: FieldListData[] = [];
  public areaGroups: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.spinner.show();
    this.route.params.subscribe((params) => {
      this.Id = params.id;
      this.getAsync(this.Id);
    });
  }
  public getAsync(id: number) {
    this.baseService.getById(Controllers.OrderStatus, id).subscribe((res) => {
      this.getFieldsData(res);
    });
  }

  public getFieldsData(orderStatus: any) {
    this.dynamicFormInput = OrderStatusUpdateForm;
    this.dynamicFormInput.formFields.forEach((field) => {
      field.value = orderStatus[field.fieldId];
    });
    this.spinner.hide();
    this.isLoading = false;
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.id = Number(this.Id);

    let formData = new FormData();
    Object.entries(event.data).forEach((element) => {
      console.log(element);
      var file;
      if (element[0] == 'icon') {
        file = element[1] as Blob;
        formData.append(element[0], file);
      } else {
        formData.append(element[0], element[1] as string);
      }
    });

    this.baseService
      .postFormItem(Controllers.OrderStatus, Actions.EditItem, formData)
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
            this.notification.showNotification('somethingWentWrong', 'danger');
          }
          this.spinner.hide();
        }
      );
  }
}
