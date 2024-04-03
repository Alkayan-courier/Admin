import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private notification: NotificationService,
    private translate: TranslateService
  ) { }
  public clientId: number;
  public activeTab=0;
  public client: any;
  public detailsInput = new DynamicDetailPageModel();
  public isLoading = true;
  public cities: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = params.id;
      this.activeTab = params.activeTab;
      this.getAsync(this.clientId);
    })
  }
  public getAsync(id: number) {
    this.baseService.getClientById(Controllers.User, id).subscribe(res => {
      console.log('Merchant',res);
      this.client = res;
      this.detailsInput.dataObject = this.client;
      this.isLoading = false;
    })
  }

}
