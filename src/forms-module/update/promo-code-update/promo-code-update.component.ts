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
  selector: 'app-promo-code-update',
  templateUrl: './promo-code-update.component.html',
  styleUrls: ['./promo-code-update.component.css']
})
export class PromoCodeUpdateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dynamicService: DynamicDataService,
    private notification: NotificationService,
    private router : Router
  ) { }
  public expiryTypes: FieldListData[] = [
    { value: 1, viewValueEn: 'Date',viewValueAr:'التاريخ' },
    { value: 2, viewValueEn: 'Orders Limit',viewValueAr:'عدد الطلبات' },
  ];

  public promoCodeId: number;
  public isLoading = true;
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.promoCodeId = params.id;
      this.getAsync(this.promoCodeId);
    })
  }
  public getAsync(id: number) {
    this.baseService.getByIdForUpdate(Controllers.PromoCode, id).subscribe(res => {
      this.getFieldsData(res);
    })
  }
  public getFieldsData(promoCode: any) {
    this.dynamicService.getFormSettings('PromoCodeForm').subscribe(res => {
      this.dynamicFormInput = res;
      let expiryTypeField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'expiryType');
      expiryTypeField.data = this.expiryTypes;
      let expiryDateField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'expiryDate');
      let ordersLimitField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'ordersLimit');
      this.dynamicFormInput.formFields.forEach(field => {
        field.value = promoCode[field.fieldId];
      });
      this.isLoading = false;
      this.spinner.hide();
    });
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.id = Number(this.promoCodeId);
    this.baseService.editItem(Controllers.PromoCode, event.data).subscribe(res => {
      this.spinner.hide();

      this.notification.showNotification(res, 'success');
      this.router.navigate(['/forms/promo-code-list']);
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
