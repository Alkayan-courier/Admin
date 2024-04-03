import { MoveOrdersDialogComponent } from './../move-orders-dialog/move-orders-dialog.component';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

import icTimer from '@iconify/icons-ic/twotone-timer';
import { MatDialog } from '@angular/material/dialog';
import { BaseService } from '../../shared/services/base.service';
import { NotificationService } from '../../shared/services/notification.service';
import { Actions, Controllers } from '../../shared/global-variables/api-config';
import { RevenueModel } from '../../shared/models/revenue-model';
@Component({
  selector: 'app-company-revenue',
  templateUrl: './company-revenue.component.html',
  styleUrls: ['./company-revenue.component.css'],
  animations: [
  
  ]
})
export class CompanyRevenueComponent implements OnInit {
  layoutCtrl = new FormControl('fullWidth');
  orders: any;
  public cards: RevenueModel[]=[];
  pageSize: any;
  pageNumber: any;
  totalRows: any;
  services: any;
  isLoading = true;
  isRateLimitReached = false;
  totalCompanyRevenue = 0;
  totalDriverRevenue = 0;
  totalOrderPrices = 0;

  public companyHeader;
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
 ;
  inputType = 'password';
  countries: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  stateCtrl = new FormControl();
  filterForm = new FormGroup({
    pageSize: new FormControl(),
    pageNumber: new FormControl(),
    from: new FormControl(),
    to: new FormControl()
  });

  // ==---------===-----------=Icons declarations area==------------------=-=-=

 
  constructor(
private baseService : BaseService,
    private router: Router,
    public dialog: MatDialog,
    private notification: NotificationService
  ) {
  }
  ngOnInit() {
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
  getAllOrders(pageSize: number, pageNumber: number) {
    this.isLoading= true;
    this.PageSize.setValue(pageSize);
    this.PageNumber.setValue(pageNumber);
    this.pageSize = pageSize;
    this.pageNumber = pageNumber;
  
   var from =  this.filterForm.get('from').value;
   var to =  this.filterForm.get('to').value;
   let request = {
pageNumber:pageNumber,
pageSize:pageSize,
ordersDateFrom :   from ,
ordersDateTo :  to
    };
console.log(request);
    this.baseService.postItem(Controllers.Order,Actions.GetRevenue,request).subscribe(res => {
    console.log(res);
    let totalClientRevenue : RevenueModel = {
        name: "totalClientRevenue",
        price:res.totalClientRevenue,
        backgroundColor:'primary',
        icon : '61d30e86-ed85-4181-9ed3-00171b0faf3b.png'
      };
      let totalCompanyRevenue : RevenueModel = {
        name: "totalCompanyRevenue",
        price:res.totalCompanyRevenue,
        backgroundColor:'#f542d4',    
        icon : '61d30e86-ed85-4181-9ed3-00171b0faf3b.png'
      }
      let totalDriverRevenue : RevenueModel = {
        name: "totalDriverRevenue",
        price:res.totalDriverRevenue,
        backgroundColor:'#f542d4',   
        icon : '61d30e86-ed85-4181-9ed3-00171b0faf3b.png'
      }
      let totalOrderPrices : RevenueModel = {
        name: "totalOrderPrices",
        price:res.totalOrderPrices,
        backgroundColor:'#f542d4',
        icon : '61d30e86-ed85-4181-9ed3-00171b0faf3b.png'
      }
      let totalDeliveredPrices : RevenueModel = {
        name: "totalDeliveredPrices",
        price:res.totalDeliveredPrices,
        backgroundColor:'#4287f5',  
        icon : '61d30e86-ed85-4181-9ed3-00171b0faf3b.png'
      }
      this.cards=[];
      this.cards.push(totalClientRevenue);
      this.cards.push(totalCompanyRevenue);
      this.cards.push(totalDriverRevenue);
      this.cards.push(totalOrderPrices);
      this.cards.push(totalDeliveredPrices);
      this.isLoading=false;
    }, error => {
     
      this.notification.showNotification(error.error,''); this.isLoading=false;
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