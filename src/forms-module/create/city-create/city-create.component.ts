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
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {

  constructor(
    private dynamicService: DynamicDataService,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private notification: NotificationService,
    private router : Router
  ) { }
  public dynamicFormInput = new DynamicFormInput();
  public isLoading = true;
  public cities: FieldListData[] = [];
  public areaGroups: FieldListData[] = [];
  ngOnInit(): void {
    this.spinner.show();
    this.getFieldsData();
  }
  public serveAction(event: DynamicFormOutput) {
    this.baseService.postItemTextReponse(Controllers.City, Actions.PostItem, event.data).subscribe(res => {
      this.spinner.hide();
      this.notification.showNotification(res, 'success');
      this.router.navigate(['/forms/city-list']);
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
   
      this.spinner.hide();
     
        this.dynamicService.getFormSettings('CityForm').subscribe(res => {
          this.dynamicFormInput = res;
       this.isLoading = false;
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
