import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { Actions, Controllers } from '../../../shared/global-variables/api-config';
import { BaseService } from '../../../shared/services/base.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { NotificationService } from '../../../shared/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDetailPageModel } from '../../../shared/models/dynamic-details.model';

@Component({
  selector: 'app-promo-code-details',
  templateUrl: './promo-code-details.component.html',
  styleUrls: ['./promo-code-details.component.css']
})
export class PromoCodeDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private notification: NotificationService,
    private translate: TranslateService
  ) { }
  public promoCodeId: number;
  public promoCode: any;
  public detailsInput = new DynamicDetailPageModel();
  public isLoading = true;
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.promoCodeId = params.id;
      this.getAsync(this.promoCodeId);
    })
  }
  public getAsync(id: number) {
    this.baseService.getById(Controllers.PromoCode, id).subscribe(res => {
      console.log(res);
      this.promoCode = res;
      this.detailsInput.dataObject = this.promoCode;
      this.isLoading = false;
    })
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.id = Number(this.promoCodeId);
    this.baseService.editItem(Controllers.PromoCode, event.data).subscribe(res => {
      this.spinner.hide();
      console.log(this.translate.getDefaultLang());

      this.notification.showNotification('promoCodeUpdatedSuccess', 'success');
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
