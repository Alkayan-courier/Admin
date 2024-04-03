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
import { deliveryFessOnOptions } from '../../../shared/global-variables/lookups';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  constructor(
    private dynamicService: DynamicDataService,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private notification: NotificationService,
    private router : Router
  ) { }
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  public dynamicFormInput = new DynamicFormInput();
  public isLoading = true;
  public areas: FieldListData[] = [];
  public orderStatuses: FieldListData[] = [];
  public clients: FieldListData[] = [];
  public orderTasks : FieldListData[] = [];
  ngOnInit(): void {
    this.spinner.show();
    this.orderTasks = [
      { value: 0, viewValueEn: 'Get From Merchant', viewValueAr: 'احضار من التاجر' },
      { value: 1, viewValueEn: 'Deliver To Merchant', viewValueAr: 'توصيل للتاجر' },
      { value: 2, viewValueEn: 'Get And Submit', viewValueAr: 'احضار وتأكيد' }
    ];
    this.getFieldsData();
  }
  public serveAction(event: DynamicFormOutput) {
    console.log(event);
    this.baseService.postItemTextReponse(Controllers.Order, Actions.PostItem, event.data).subscribe(res => {
      this.spinner.hide();
      this.notification.showNotification(res, 'success');
      this.router.navigate(['/forms/order-list']);
    }, error => {
      if (error.status === 400) {
        this.notification.showNotification(error.error, 'danger');
      }
      else {
        this.notification.showNotification(this.getTranslatableText('somethingWentWrong'), 'danger');
      }
      this.spinner.hide();
    })
  }
  public getFieldsData() {
    this.baseService.getAllForList(Controllers.Area).subscribe(res => {
      this.areas = res;
      console.log(this.areas);
      this.baseService.getItemsByKey(Controllers.User, Actions.GetAllItems, 'role', this.userRolesEnum.Merchant).subscribe(res => {
        this.clients = res;
        this.baseService.getAllForList(Controllers.OrderStatus).subscribe(res => {
          this.orderStatuses = res;
          console.log(res);
          this.dynamicService.getFormSettings('OrderForm').subscribe(res => {
            this.dynamicFormInput = res;
            let areaIdField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'areaId');
            areaIdField.data = this.areas;
            let clientIdField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'clientId');
            clientIdField.data = this.clients;
            let orderStatusIdField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'orderStatusId');
            orderStatusIdField.data = this.orderStatuses;
            let taskField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'orderTaskId');

            taskField.data = this.orderTasks;
            this.isLoading = false;
            this.spinner.hide();
          });
        });

      });
    });
  }

  public getTranslatableText(key: string) {
    var textValue = "";
    this.translate.get(key).subscribe((text: string) => {
      textValue = text;
    });
    return textValue;
  }
}
