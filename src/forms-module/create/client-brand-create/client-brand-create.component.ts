import { Component, OnInit } from '@angular/core';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { BaseService } from '../../../shared/services/base.service';
import { Controllers, Actions } from '../../../shared/global-variables/api-config';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';

@Component({
  selector: 'app-client-brand-create',
  templateUrl: './client-brand-create.component.html',
  styleUrls: ['./client-brand-create.component.css']
})
export class ClientBrandCreateComponent implements OnInit {

  constructor(
    private dynamicService: DynamicDataService,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private notification: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  public clientId: number;
  public dynamicFormInput = new DynamicFormInput();
  public isLoading = true;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = params.clientId
    })
    this.spinner.show();
    this.getFieldsData();
  }
  public serveAction(event: DynamicFormOutput) {
    console.log(event);
    let formData = new FormData();
    Object.entries(event.data).forEach(element => {
      var file;
      if (element[0] == 'brandImage') {
        file = element[1] as Blob;
        formData.append(element[0], file);
      }
      else {
        formData.append(element[0], element[1] as string);
      }
      formData.append('clientId', this.clientId.toString());
    });
    this.baseService.postFormItem(Controllers.ClientBrand, Actions.PostItem, formData).subscribe(res => {
      this.spinner.hide();
      this.notification.showNotification(res, 'success');
      this.router.navigate([`/forms/client-details/${this.clientId}/2`]);
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
    this.dynamicService.getFormSettings('ClientBrandForm').subscribe(res => {
      this.dynamicFormInput = res;
      console.log(this.dynamicFormInput);
      this.isLoading = false;
      this.spinner.hide();
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
