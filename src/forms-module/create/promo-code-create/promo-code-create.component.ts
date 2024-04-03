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
  selector: 'app-promo-code-create',
  templateUrl: './promo-code-create.component.html',
  styleUrls: ['./promo-code-create.component.css']
})
export class PromoCodeCreateComponent implements OnInit {

  public dynamicFormInput = new DynamicFormInput();
  public isLoading = true;
  public expiryTypes: FieldListData[] = [
    { value: 1, viewValueEn: 'Date',viewValueAr:'التاريخ' },
    { value: 2, viewValueEn: 'Orders Limit',viewValueAr:'عدد الطلبات' },
  ];

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
    this.baseService.postItemTextReponse(Controllers.PromoCode, Actions.PostItem, event.data).subscribe(res => {
      this.spinner.hide();
      this.notification.showNotification(res, 'success');
      this.router.navigate(['/forms/promo-code-list']);
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
    this.dynamicService.getFormSettings('PromoCodeForm').subscribe(res => {
      this.dynamicFormInput = res;
      let expiryTypeField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'expiryType');
      expiryTypeField.data = this.expiryTypes;
      let expiryDateField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'expiryDate');
      let ordersLimitField = this.dynamicFormInput.formFields.find(x => x.fieldId == 'ordersLimit');
      this.isLoading = false;
      this.spinner.hide();
    });
  }

}
