import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { Controllers } from '../../../shared/global-variables/api-config';
import { BaseService } from '../../../shared/services/base.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { NotificationService } from '../../../shared/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDetailPageModel } from '../../../shared/models/dynamic-details.model';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private notification: NotificationService,
    private translate: TranslateService
  ) { }
  public driverId: number;
  public driver: any;
  public detailsInput = new DynamicDetailPageModel();
  public isLoading = true;
  public cities: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.driverId = params.id;
      this.getAsync(this.driverId);
    })
  }
  public getAsync(id: number) {
    this.baseService.getById(Controllers.User, id).subscribe(res => {
      this.driver = res;
      this.detailsInput.dataObject = this.driver;
      this.isLoading = false;
    }) 
  }

}
