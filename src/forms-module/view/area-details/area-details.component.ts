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
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dynamicService: DynamicDataService,
    private notification: NotificationService,
    private translate: TranslateService
  ) { }
  public areaId: number;
  public area: any;
  public detailsInput = new DynamicDetailPageModel();
  public isLoading = true;
  public cities: FieldListData[] = [];
  public areaGroups: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.areaId = params.id;
      this.getAsync(this.areaId);
    })
  }
  public getAsync(id: number) {
    this.baseService.getById(Controllers.Area, id).subscribe(res => {
      console.log(res);
      this.area = res;
      this.detailsInput.dataObject = this.area;
      this.isLoading = false;
    }) 
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.id = Number(this.areaId);
    this.baseService.editItem(Controllers.Area, event.data).subscribe(res => {
      this.spinner.hide();
      console.log(this.translate.getDefaultLang());

      this.notification.showNotification('areaUpdatedSuccess', 'success');
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
