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
  selector: 'app-areagroup-details',
  templateUrl: './areagroup-details.component.html',
  styleUrls: ['./areagroup-details.component.css']
})
export class AreaGroupDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dynamicService: DynamicDataService,
    private notification: NotificationService,
    private translate: TranslateService
  ) { }
  public areagroupId: number;
  public area: any;
  public detailsInput = new DynamicDetailPageModel();
  public isLoading = true;
  public cities: FieldListData[] = [];
  public areaGroups: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.spinner.show();
    this.route.params.subscribe(params => {
      this.areagroupId = params.id;
      this.getAsync(this.areagroupId);
    })
  }
  public getAsync(id: number) {
    this.baseService.getById(Controllers.AreaGroup, id).subscribe(res => {
    
      this.area = res;
      this.detailsInput.dataObject = this.area;
      this.isLoading = false;    this.spinner.hide();
    }) 
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.id = Number(this.areagroupId);
    this.baseService.editItem(Controllers.AreaGroup, event.data).subscribe(res => {
      this.spinner.hide();
      console.log(this.translate.getDefaultLang());

      this.notification.showNotification('areagroupUpdatedSuccess', 'success');
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