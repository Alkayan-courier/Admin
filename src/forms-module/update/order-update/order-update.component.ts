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
import { RoleTypes } from '../../../shared/enums/enums';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dynamicService: DynamicDataService,
    private notification: NotificationService,
    private router: Router
  ) { }
  public Id: number;
  public baseStatuses = [];
  public isLoading = true;
  public areas: FieldListData[] = [];
  public orderStatuses: FieldListData[] = [];
  public clients: FieldListData[] = [];
  public areaGroups: FieldListData[] = []; 
   public orderTasks : FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.spinner.show();
    this.route.params.subscribe(params => {
      this.Id = params.id;
       this.orderTasks = [
        { value: 0, viewValueEn: 'Get From Merchant', viewValueAr: 'احضار من التاجر' },
        { value: 1, viewValueEn: 'Deliver To Merchant', viewValueAr: 'توصيل للتاجر' },
        { value: 2, viewValueEn: 'Get And Submit', viewValueAr: 'احضار وتأكيد' }
      ];
      this.getAsync(this.Id);
    });

  }
  public getAsync(id: number) {
    this.baseService.getForUpdate(Controllers.Order, id).subscribe(res => {
      this.getFieldsData(res);  console.log(res);
    });

  }
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  public getFieldsData(client: any) {
    this.dynamicService.getFormSettings('OrderUpdateForm').subscribe(res => {
      this.dynamicFormInput = res;
      this.dynamicFormInput.formFields.forEach(field => {
        field.value = client[field.fieldId];
      });
    });
    this.baseService.getAllForList(Controllers.Area).subscribe(res => {
      this.areas = res;
      this.baseService.getItemsByKey(Controllers.User, Actions.GetAllItems, 'role', this.userRolesEnum.Merchant).subscribe(res => {
        this.clients = res;
        this.baseService.getAllForList(Controllers.OrderStatus).subscribe(res => {
          this.orderStatuses = res;
          let areaIdField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'areaId');
          areaIdField.data = this.areas;
          let clientIdField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'clientId');
          clientIdField.data = this.clients;
          let orderStatusIdField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'orderStatusId');
          orderStatusIdField.data = this.orderStatuses;
            let taskIdField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'orderTask');

          taskIdField.data = this.orderTasks;
          this.isLoading = false;
          this.spinner.hide();
        });

      });

    });

  }

  public serveAction(event: DynamicFormOutput) {
    event.data.id = Number(this.Id);
    console.log(event.data);
    this.baseService.editItem(Controllers.Order, event.data).subscribe(res => {
      this.spinner.hide();

      this.notification.showNotification(res, 'success');
      this.router.navigate(['/forms/order-list']);
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
