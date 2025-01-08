import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import {
  Actions,
  Controllers,
} from '../../../shared/global-variables/api-config';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { DynamicListInput } from '../../../shared/models/dynamic-list.model';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { ListActionClickedOutput } from '../../../shared/models/list-action-clicked-output';
import { ListActionTypeEnum, RoleTypes } from '../../../shared/enums/enums';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../../shared/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { RecordList, RecordSearchForm } from '../../dynamic-data';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css'],
})
export class RecordListComponent implements OnInit {
  public dynamicFormInput = new DynamicFormInput();
  public dynamicListInput = new DynamicListInput();
  public isLoading = true;
  public pageSize = 10;
  public pageNumber = 1;
  public areaGroups: FieldListData[] = [];
  public recordList: any[] = [];
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  constructor(
    private dynamicService: DynamicDataService,
    private router: Router,
    private baseService: BaseService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.getFormData();
  }
  public getFormData() {
    this.baseService.getAllForList(Controllers.AreaGroup).subscribe((res) => {
      this.areaGroups = res;
      this.dynamicFormInput = RecordSearchForm;
      let areaGroupIdField = this.dynamicFormInput.formFields.find(
        (x) => x.fieldId == 'areaGroupId'
      );
      areaGroupIdField.data = this.areaGroups;
      this.getListSettings();
    });
  }
  public getListSettings() {
    this.dynamicListInput.columns = RecordList;
    this.getListData();
    this.spinner.hide();
  }
  public getListData(pageSize?: number, pageNumber?: number) {
    let request = {
      pageSize: pageSize ? pageSize : this.pageSize,
      pageNumber: pageNumber ? pageNumber : this.pageNumber,
      name: '',
    };
    this.baseService
      .postItem(Controllers.Record, Actions.GetList, request)
      .subscribe((res) => {
        this.recordList = res.result.entities;
        this.dynamicListInput.data = this.recordList;
        this.dynamicListInput.totalCount = res.result.totalCount;
        this.isLoading = false;
        this.spinner.hide();
      });
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.pageSize = this.pageSize;
    event.data.pageNumber = this.pageNumber;
    this.baseService
      .postItem(Controllers.Record, Actions.GetList, event.data)
      .subscribe((res) => {
        this.recordList = res.result.entities;
        this.dynamicListInput.data = this.recordList;
        this.dynamicListInput.totalCount = res.totalCount;
        this.spinner.hide();
        console.log(res);
      });
  }

  public serveListAction(event: ListActionClickedOutput) {
    switch (event.action) {
      case ListActionTypeEnum.Delete: {
        break;
      }
      case ListActionTypeEnum.Edit: {
        this.router.navigate([`/forms/record-update/${event.entityId}`]);
        break;
      }
      case ListActionTypeEnum.View: {
        this.router.navigate([`/forms/record-details/${event.entityId}`]);
        break;
      }

      default:
        break;
    }
  }
  public pageChanged(event: PageEvent) {
    this.getListData(event.pageSize, event.pageIndex + 1);
  }
}
