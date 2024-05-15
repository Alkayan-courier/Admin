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
import { TranslateService } from '@ngx-translate/core';
import {
  FinancialRoundList,
  FinancialRoundSearchForm,
} from '../../dynamic-data';

@Component({
  selector: 'app-rounds-list',
  templateUrl: './rounds-list.component.html',
  styleUrls: ['./rounds-list.component.css'],
})
export class RoundListComponent implements OnInit {
  public dynamicFormInput = new DynamicFormInput();
  public dynamicListInput = new DynamicListInput();
  public isLoading = true;
  public pageSize = 10;
  public pageNumber = 1;
  public clients: FieldListData[] = [];
  public roundList: any[] = [];
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  public baseStatuses = [];

  constructor(
    private dynamicService: DynamicDataService,
    private router: Router,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.baseStatuses = [
      {
        value: 1,
        viewValueEn: 'Pending Approval',
        viewValueAr: 'بإنتظار الموافقة',
      },
      { value: 2, viewValueEn: 'Approved', viewValueAr: 'موافق عليه' },
    ];
    this.spinner.show();
    this.getFormData();
  }
  public getFormData() {
    this.baseService
      .getItemsByKey(
        Controllers.User,
        Actions.GetAllItems,
        'role',
        this.userRolesEnum.Merchant
      )
      .subscribe((res) => {
        this.clients = res;
        this.dynamicFormInput = FinancialRoundSearchForm;
        let clientIdField = this.dynamicFormInput.formFields.find(
          (x) => x.fieldId == 'clientId'
        );
        clientIdField.data = this.clients;
        let statusField = this.dynamicFormInput.formFields.find(
          (x) => x.fieldId == 'status'
        );
        statusField.data = this.baseStatuses;
        this.getListSettings();
      });
  }
  public getListSettings() {
    this.dynamicListInput.columns = FinancialRoundList;
    this.getListData();
  }
  public getListData(pageSize?: number, pageNumber?: number) {
    let request = {
      pageSize: pageSize ? pageSize : this.pageSize,
      pageNumber: pageNumber ? pageNumber : this.pageNumber,
    };
    this.baseService
      .postItem(Controllers.FinancialRound, Actions.GetList, request)
      .subscribe((res) => {
        this.roundList = res.entities;
        console.log(res);
        this.dynamicListInput.data = this.roundList;
        this.dynamicListInput.totalCount = res.totalCount;
        this.isLoading = false;
        this.spinner.hide();
      });
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.pageSize = this.pageSize;
    event.data.pageNumber = this.pageNumber;
    this.baseService
      .postItem(Controllers.FinancialRound, Actions.GetList, event.data)
      .subscribe((res) => {
        this.roundList = res.entities;
        this.dynamicListInput.data = this.roundList;
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
        this.router.navigate([`/forms/round-update/${event.entityId}`]);
        break;
      }
      case ListActionTypeEnum.View: {
        this.router.navigate([`/forms/round-details/${event.entityId}`]);
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
