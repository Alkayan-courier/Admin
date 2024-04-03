/* import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Actions, Controllers } from 'src/shared/global-variables/api-config';
import { BaseService } from 'src/shared/services/base.service';

@Component({
  selector: 'app-record-result',
  templateUrl: './record-result.component.html',
  styleUrls: ['./record-result.component.css']
})
export class RecordResultComponent implements OnInit {

  layoutCtrl = new FormControl('fullWidth');
  orders: any;
  clientsList = [];
  driversList = [];
  pageSize: any;
  pageNumber: any;
  totalRows: any;
  services: any;
  isLoadingResults = true;
  isRateLimitReached = false;
  totalCompanyRevenue = 0;
  totalDriverRevenue = 0;
  totalOrderPrices = 0;
  totalClientRevenue = 0;
  @Input()
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
  labels = aioTableLabels;
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

  get clientId () {
    return this.filterForm.get('clientId') as FormControl;
  }
  get driverId () {
    return this.filterForm.get('driverId') as FormControl;
  }
  get userType () {
    return this.filterForm.get('userType') as FormControl;
  }
  get ordersDateTo () {
    return this.filterForm.get('ordersDateTo') as FormControl;
  }
  get ordersDateFrom () {
    return this.filterForm.get('ordersDateFrom') as FormControl;
  }
  
  getTotalPrices(){
    return 0;
  }

  getTotalDeliveryCost(){
    return 0;
  }
  getTotalAddedPrices(){
    return 0;
  }
  getTotal(){
    return 0;
  }
  getOrderDate(){
    const datestr = ' تاريخ الكشف: من ';
    return datestr + new Date(this.ordersDateFrom.value).toLocaleDateString() + ' الى ' + new Date(this.ordersDateTo.value).toLocaleDateString()
  }
  // ==---------===-----------=Icons declarations area==------------------=-=-=
  filterValue = {} as any;
  theme = theme;
  constructor(
    private ordersService: OrdersManagementService,
    private router: Router,
    private systemService: SystemService
  ) {
    
    // this.filterValue = router.getCurrentNavigation().extras.state;
    console.log(this.filterValue);
  }
  ngOnInit() {
    this.filterValue = JSON.parse(localStorage.getItem('recordForm'))
    console.log(this.filterValue);
    this.filterForm.get('clientId').setValue(this.filterValue.clientId);
    this.filterForm.get('driverId').setValue(this.filterValue.driverId);
    this.filterForm.get('userType').setValue(this.filterValue.userType);
    this.filterForm.get('ordersDateTo').setValue(this.filterValue.ordersDateTo);
    this.filterForm.get('ordersDateFrom').setValue(this.filterValue.ordersDateFrom);
  
    this.getAllOrders(10, 1);
  }



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
    const form = this.filterForm.value;
    form.ordersDateFrom = this.convertToUTC(this.filterForm.get('ordersDateFrom').value);
    form.ordersDateTo = this.convertToUTC(this.filterForm.get('ordersDateTo').value);
    this.baseService.getDailyRecord(form).subscribe(res => {
      if(this.userType.value == 1 || this.userType.value == 2){
        this.ordersList = res.orderListWithRevenue.data
        // this.dataSource = new MatTableDataSource<Element>();
        // this.dataSource.sort = this.sort;
        // this.totalRows = res.orderListWithRevenue.totalRows;
        this.totalCompanyRevenue = res.totalCompanyRevenue;
        this.totalDriverRevenue = res.totalDriverRevenue;
        this.totalClientRevenue = res.totalClientRevenue;
        this.totalOrderPrices = res.totalOrderPrices;
      }
      else if(this.userType.value == 3){
        console.log(res);
        this.clientsList = res;
      }
      else if(this.userType.value == 4) {
        console.log(res);
        this.driversList = res;
      }
      this.isLoadingResults = false;
      this.isRateLimitReached = false;
    }, error => {
      this.isLoadingResults = false;
      this.systemService.showErrorMessage(error.error);
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
    this.router.navigate([`/order-management/order-details/${id}`]);
  }
  navigateToUpdate(id) {
    this.router.navigate([`/order-management/update/${id}`]);
  }
  navigateToCreate() {
    this.router.navigate([`/order-management/create`]);
  }
  getAllOrders(pageSize: number, pageNumber: number) {
    this.isLoadingResults = true;
    this.PageSize.setValue(pageSize? pageSize : 10);
    this.PageNumber.setValue(pageNumber? pageNumber : 1);
    this.pageSize = pageSize;
    this.pageNumber = pageNumber;
    this.baseService.postItem(Controllers.Order,Actions.GetList,this.filterForm.value).subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource<Element>(res.data);
      this.dataSource.sort = this.sort;
      this.totalRows = res.totalRows;

      this.isLoadingResults = false;
      this.isRateLimitReached = false;
    }, error => {
      this.isLoadingResults = false;
    });
  }
  
}
 */