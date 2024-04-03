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
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private notification: NotificationService,
    private translate: TranslateService
  ) { }
  public employeeId: number;
  public employee: any;
  public activeTab=0;
  public detailsInput = new DynamicDetailPageModel();
  public isLoading = true;
  public cities: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = params.id;
      this.getAsync(this.employeeId);
    })
  }
  public getAsync(id: number) {
    this.baseService.getById(Controllers.User, id).subscribe(res => {
      console.log(res);
      this.employee = res;
      this.detailsInput.dataObject = this.employee;
      this.isLoading = false;
    }) 
  }

}
