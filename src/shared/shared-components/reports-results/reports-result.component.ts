import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl, FormGroup } from '@angular/forms';


import { ActivatedRoute, Router } from '@angular/router';


import icTimer from '@iconify/icons-ic/twotone-timer';
import { DatePipe } from '@angular/common';
import { BaseService } from '../../../shared/services/base.service';
import { Actions, Controllers } from '../../../shared/global-variables/api-config';

import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from '../../../../src/shared/services/notification.service';
import { RoleTypes } from '../../../../src/shared/enums/enums';
@Component({
  selector: 'app-reports-results',
  templateUrl: './reports-result.component.html',
  styleUrls: ['./reports-result.component.css']
})
export class ReportsResultComponent implements OnInit {
  layoutCtrl = new FormControl('fullWidth');
  orders: any;
  clientsList = [];
  clientdetailsList = [];
  driverdetailsList = [];
  driversList = [];
  pageSize: any;
  isEmptyData = false;
  pageNumber: any;
  totalRows: any;
  services: any;
  isLoadingResults = true;
  isRateLimitReached = false;
  public isDriver = false;
  totalCompanyRevenue = 0;
  additionalCostsTotal = 0;
  totalDriverRevenue = 0;
  totalOrderPrices = 0;
  totalClientRevenue = 0;
  total = 0;
  isValidLink = true;
  displayedColumns: string[] = [
    'orderDate',
    'clientName',
    'driverName',
    'status',
    'orderTotalPrice',
    'coompanyRevenue',
    'driverRevenue',
  ];
  icTimer = icTimer;
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();

  inputType = 'password';
  countries: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  stateCtrl = new FormControl();
  filterForm = new FormGroup({
    clientId: new FormControl(),
    driverId: new FormControl(),
    userType: new FormControl(),
    ordersDateTo: new FormControl(),
    ordersDateFrom: new FormControl(),
    pageSize: new FormControl(),
    pageNumber: new FormControl(),
  });
  public dateNow = new Date();
  constructor(
    private baseService: BaseService,
    private router: Router,
    private notification: NotificationService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
  ) {

    // this.filterValue = router.getCurrentNavigation().extras.state;
    console.log(this.filterValue);
  } public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  ngOnInit() {
    this.spinner.show();
    this.route.params.subscribe(params => {
      if (params.roundId) {
        this.userType.setValue(3);
        this.getAllOrdersByRoundId(params.roundId);
      }
      else {
        this.filterValue = JSON.parse(sessionStorage.getItem('recordForm'))
        this.filterForm.get('clientId').setValue(this.filterValue.clientId);
        this.filterForm.get('driverId').setValue(this.filterValue.driverId);
        this.filterForm.get('userType').setValue(this.filterValue.userType);
        this.filterForm.get('ordersDateTo').setValue(this.filterValue.ordersDateTo);
        this.filterForm.get('ordersDateFrom').setValue(this.filterValue.ordersDateFrom);
        this.getAllOrders(10, 1);
      }
    })
  }
  get clientId() {
    return this.filterForm.get('clientId') as FormControl;
  }
  get driverId() {
    return this.filterForm.get('driverId') as FormControl;
  }
  get userType() {
    return this.filterForm.get('userType') as FormControl;
  }
  get ordersDateTo() {
    return this.filterForm.get('ordersDateTo') as FormControl;
  }
  get ordersDateFrom() {
    return this.filterForm.get('ordersDateFrom') as FormControl;
  }

  getTotalPrices() {
    return 0;
  }

  getTotalDeliveryCost() {
    return 0;
  }
  getTotalAddedPrices() {
    return 0;
  }
  getTotal() {
    return 0;
  }
  getOrderDate() {
    const datestr = ' تاريخ الكشف: من ';
    return datestr + new Date(this.ordersDateFrom.value).toLocaleDateString() + ' الى ' + new Date(this.ordersDateTo.value).toLocaleDateString()
  }
  // ==---------===-----------=Icons declarations area==------------------=-=-=
  filterValue = {} as any;





  get PageSize() {
    return this.filterForm.get('pageSize') as FormControl;
  }
  get PageNumber() {
    return this.filterForm.get('pageNumber') as FormControl;
  }
  convertToUTC(date: Date): Date {
    if (date) {
      date = new Date(date);
      return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    } else { return null; }
  }
  public ordersList = [];

  getAllOrders(pageSize: number, pageNumber: number) {
    this.isLoadingResults = true;
    this.PageSize.setValue(pageSize);
    this.PageNumber.setValue(pageNumber);
    this.pageSize = pageSize;
    this.pageNumber = pageNumber;
    let request = {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      ordersDateFrom: this.filterForm.get('ordersDateFrom').value,
      ordersDateTo: this.filterForm.get('ordersDateTo').value,
      userType: this.filterForm.get('userType').value,
      clientId: this.filterForm.get('clientId').value,
      driverId: this.filterForm.get('driverId').value
    }
    console.log('Request',request);

    if (this.userType.value == 2 || this.userType.value == 3) {

      this.baseService.postItem(Controllers.Order, Actions.DailyRecords, request).subscribe(res => {
        this.isValidLink = res.isValid;
        if (this.userType.value == 2) {
          console.log('Drivers List', res);
          this.driversList = res.orderListWithRevenue.data;
          if (this.driversList.length == 0) {
            this.isEmptyData = true;
          }
        }
        else if (this.userType.value == 3) {
          console.log('Clients List', res);
          this.clientsList = res.orderListWithRevenue.data;

          if (this.clientsList.length == 0) {
            this.isEmptyData = true;
          }
        }


        this.totalCompanyRevenue = res.totalCompanyRevenue;
        this.totalDriverRevenue = res.totalDriverRevenue;
        this.totalClientRevenue = res.totalClientRevenue;
        this.totalOrderPrices = res.totalOrderPrices;
        this.additionalCostsTotal = res.additionalCostsTotal;
        this.total = res.total;



        this.isLoadingResults = false;
        this.isRateLimitReached = false;
      }, error => {
        this.isLoadingResults = false;
        this.notification.showNotification(error.error, 'Failed');
      });
    }
    else if (this.userType.value == 5) {
      let object = {
        pageSize: pageSize ? pageSize : this.pageSize,
        pageNumber: pageNumber ? pageNumber : this.pageNumber,
        userType: this.userRolesEnum.Driver,
        ordersDateFrom: this.filterForm.get('ordersDateFrom').value,
        ordersDateTo: this.filterForm.get('ordersDateTo').value,
      }
      this.baseService.postItem(Controllers.Order, Actions.GetDriversDetails, request).subscribe(res => {
        console.log('Driver Details', res);
        this.driverdetailsList = res;
        if (this.driverdetailsList.length == 0) {
          this.isEmptyData = true;
        }
      });
    }
    else if (this.userType.value == 4) {

      let object = {
        pageSize: pageSize ? pageSize : this.pageSize,
        pageNumber: pageNumber ? pageNumber : this.pageNumber,
        userType: this.userRolesEnum.Merchant,
        ordersDateFrom: this.filterForm.get('ordersDateFrom').value,
        ordersDateTo: this.filterForm.get('ordersDateTo').value,
      }
      console.log('Sending Client Request', request);
      this.baseService.postItem(Controllers.Order, Actions.GetClientsDetails, object).subscribe(res => {
        console.log('Client Details', res);
        this.clientdetailsList = res;
        if (this.clientdetailsList.length == 0) {
          this.isEmptyData = true;
        }
      });

    }
    this.spinner.hide();
  }
  getAllOrdersByRoundId(roundId: number) {
    this.isLoadingResults = true;

    this.baseService.getItemsByKey(Controllers.Order, Actions.DailyRecordsByRoundId, 'roundId', roundId).subscribe(res => {
      this.isValidLink = res.isValid;
      if(this.isValidLink){
        console.log('Clients List', res);
        this.clientsList = res.orderListWithRevenue.data;
        this.filterForm.get('ordersDateTo').setValue(res.dateFrom);
        this.filterForm.get('ordersDateFrom').setValue(res.dateTo);
        if (this.clientsList.length == 0) {
          this.isEmptyData = true;
        }
  
        this.totalCompanyRevenue = res.totalCompanyRevenue;
        this.totalDriverRevenue = res.totalDriverRevenue;
        this.totalClientRevenue = res.totalClientRevenue;
        this.totalOrderPrices = res.totalOrderPrices;
      }
     

      this.isLoadingResults = false;
      this.spinner.hide();
      this.isRateLimitReached = false;
    }, error => {
      this.isLoadingResults = false;
      this.notification.showNotification(error.error, 'Failed');
    });
  }
  onPageChanged(page: PageEvent) {
    this.pageSize = page.pageSize;
    this.pageNumber = page.pageIndex + 1;
    this.paginator.pageSize = page.pageSize;
    this.getAllOrders(page.pageSize, page.pageIndex + 1);
  }
  filterOrders() {
    this.getAllOrders(this.pageSize, this.pageNumber);
  }
  navigateToDetails(id) {
    this.router.navigate([`/forms/order-details/${id}`]);
  }
  navigateToUpdate(id) {
    this.router.navigate([`/forms/order-update/${id}`]);
  }
  navigateToCreate() {
    this.router.navigate([`/forms/order-create`]);
  }

}