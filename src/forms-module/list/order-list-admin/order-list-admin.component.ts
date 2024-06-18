import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoleTypes } from '../../../shared/enums/enums';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MoveOrdersDialogComponent } from '../../../forms-module/move-orders-dialog/move-orders-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../shared/services/language.service';
import { OrderSearchForm } from '../../dynamic-data';
@Component({
  selector: 'app-order-list-admin',
  templateUrl: './order-list-admin.component.html',
  styleUrls: ['./order-list-admin.component.css'],
})
export class OrderListAdminComponent implements OnInit {
  public drivers: FieldListData[] = [];
  public clients: FieldListData[] = [];
  public areas: FieldListData[] = [];
  constructor(
    private dynamicService: DynamicDataService,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private router: Router,
    private translate: TranslateService,
    public languageService: LanguageService
  ) {}
  public dynamicFormInput = new DynamicFormInput();
  public dynamicListInput = new DynamicListInput();
  public isLoading = true;
  public pageSize = 10;
  dataSource: MatTableDataSource<any>;
  public pageNumber = 1;
  public cities: FieldListData[] = [];
  public clientBrands: FieldListData[] = [];
  public areasList: any[] = [];

  selection = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  ngOnInit(): void {
    this.spinner.show();
    this.getFormData();
  }
  public getFormData() {
    this.dynamicFormInput = OrderSearchForm;
    var storedForm = JSON.parse(sessionStorage.getItem('searchForm'));
    if (storedForm) {
      this.dynamicFormInput.formFields.find(
        (x) => x.fieldId == 'fromDate'
      ).value = storedForm.fromDate;
      this.dynamicFormInput.formFields.find(
        (x) => x.fieldId == 'toDate'
      ).value = storedForm.toDate;
    }
    this.getAllStatuses();
    // this.dynamicService.getFormSettings('OrderSearchForm').subscribe((res) => {
    // });
  }

  public getListData(pageSize?: number, pageNumber?: number) {
    let request = {
      pageSize: pageSize ? pageSize : this.pageSize,
      pageNumber: pageNumber ? pageNumber : this.pageNumber,
    };
    this.baseService
      .postItem(Controllers.Order, Actions.ListWithRevenue, request)
      .subscribe((res) => {
        this.dataSource = new MatTableDataSource(res.entities);
        this.dataSource.sort = this.sort;
        this.totalRows = res.totalCount;
        this.isLoading = false;
        this.spinner.hide();
      });
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.pageSize = this.pageSize;
    event.data.pageNumber = this.pageNumber;
    sessionStorage.setItem('searchForm', JSON.stringify(this.filterForm.value));
    this.baseService
      .postItem(Controllers.Order, Actions.ListWithRevenue, event.data)
      .subscribe((res) => {
        console.log(res.entities);
        this.dataSource = new MatTableDataSource(res.entities);
        this.dataSource.sort = this.sort;
        this.totalRows = res.totalCount;
        this.isLoading = false;
        this.spinner.hide();
      });
  }
  get clientId() {
    return this.filterForm.get('clientId') as FormControl;
  }
  get driverId() {
    return this.filterForm.get('driverId') as FormControl;
  }
  get areaId() {
    return this.filterForm.get('areaId') as FormControl;
  }
  get areaGroupId() {
    return this.filterForm.get('areaGroupId') as FormControl;
  }
  get orderStatusId() {
    return this.filterForm.get('orderStatusId') as FormControl;
  }
  get from() {
    return this.filterForm.get('from') as FormControl;
  }
  get to() {
    return this.filterForm.get('to') as FormControl;
  }
  get PageSize() {
    return this.filterForm.get('pageSize') as FormControl;
  }
  get PageNumber() {
    return this.filterForm.get('pageNumber') as FormControl;
  }
  public revenueAuth = ['Admin', 'Manager', 'Accountant'];
  layoutCtrl = new FormControl('fullWidth');
  orders: any;
  selectedClient: any;
  selectedDriverId: any;
  selectedDriver: any;
  client: any;
  area: any;
  driver: any;
  areaGroups: any;
  orderStatuses: any;
  clientsControl = new FormControl();
  driversControl = new FormControl();
  areasControl = new FormControl();
  areaGroupControl = new FormControl();
  filteredDriversOptions: Observable<any>;
  filteredClientsOptions: Observable<any>;
  filteredAreasOptions: Observable<any>;
  filteredAreaGroupsOptions: Observable<any>;

  totalRows: any;
  services: any;
  isLoadingResults = true;
  isRateLimitReached = false;
  @Input()
  displayedColumns: string[] = [
    'select',
    'orderDate',
    'merchantName',
    'driverName',
    'area',
    'status',
    'driverRevenue',
    'orderTotalPrice',
    'actions',
  ];
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }

  isAllSelected() {
    if (this.dataSource) {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
    return false;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
    console.log(this.selection.selected);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MoveOrdersDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const dialogResult = result;
        dialogResult.orders = this.selection.selected;
        dialogResult.recordDate = this.convertToUTC(dialogResult.recordDate);
        console.log(dialogResult);
        this.baseService
          .postItem(Controllers.Record, Actions.MoveOrders, dialogResult)
          .subscribe((res) => {
            this.notification.showNotification(
              this.translate.instant('ordersMovedSuccess'),
              'success'
            );
          });
      }
    });
  }

  convertToUTC(date: Date): Date {
    if (date) {
      date = new Date(date);
      return new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
      );
    } else {
      return null;
    }
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
  inputType = 'password';
  countries: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  stateCtrl = new FormControl();
  filterForm = new FormGroup({
    clientId: new FormControl(),
    driverId: new FormControl(),
    areaId: new FormControl(),
    areaGroupId: new FormControl(),
    orderStatusId: new FormControl(),
    from: new FormControl(),
    notes: new FormControl(),
    to: new FormControl(),
    pageSize: new FormControl(),
    pageNumber: new FormControl(),
  });
  public selectionList = [];
  public loggedInUserRoles;
  isAuth = false;

  onPageChanged(page: PageEvent) {
    this.pageSize = page.pageSize;
    this.pageNumber = page.pageIndex + 1;
    this.paginator.pageSize = page.pageSize;
    this.getListData(page.pageSize, page.pageIndex + 1);
  }
  filterOrders() {
    this.getListData(this.pageSize, this.pageNumber);
  }

  getALlClients() {
    this.baseService
      .getItemsByKey(
        Controllers.User,
        Actions.GetAllItems,
        'role',
        this.userRolesEnum.Merchant
      )
      .subscribe(
        (res) => {
          this.clients = res;
          this.getAllDrivers();
        },
        (error) => {
          this.notification.showNotification(error.error, 'Failed');
        }
      );
  }

  getALlAreas() {
    this.baseService.getAllForList(Controllers.Area).subscribe(
      (res) => {
        this.areas = res;
        this.getAllBrands();
      },
      (error) => {
        this.notification.showNotification(error.error, 'Failed');
      }
    );
  }
  getAllDrivers() {
    this.baseService
      .getItemsByKey(
        Controllers.User,
        Actions.GetAllItems,
        'role',
        this.userRolesEnum.Driver
      )
      .subscribe(
        (res) => {
          this.drivers = res;
          this.getALlAreas();
        },
        (error) => {
          this.notification.showNotification(error.error, 'Failed');
        }
      );
  }
  getAllBrands() {
    this.baseService.getAllForList(Controllers.ClientBrand).subscribe((res) => {
      this.clientBrands = res;
      let areaIdField = this.dynamicFormInput.formFields.find(
        (x) => x.fieldId == 'areaId'
      );
      areaIdField.data = this.areas;
      let clientIdField = this.dynamicFormInput.formFields.find(
        (x) => x.fieldId == 'clientId'
      );
      clientIdField.data = this.clients;
      let driverIdField = this.dynamicFormInput.formFields.find(
        (x) => x.fieldId == 'driverId'
      );
      driverIdField.data = this.drivers;
      let orderStatusIdField = this.dynamicFormInput.formFields.find(
        (x) => x.fieldId == 'orderStatusId'
      );
      orderStatusIdField.data = this.orderStatuses;
      let clientBrandIdField = this.dynamicFormInput.formFields.find(
        (x) => x.fieldId == 'clientBrandId'
      );
      clientBrandIdField.data = this.clientBrands;
      this.getListData();
    });
  }
  getAllStatuses() {
    this.baseService.getAllForList(Controllers.OrderStatus).subscribe(
      (res) => {
        this.orderStatuses = res;
        this.getALlClients();
      },
      (error) => {
        this.notification.showNotification(error.error, 'Failed');
      }
    );
  }

  clientSelected(event) {
    this.selectedClient = this.clients.find(
      (x) => x.viewValueEn == event.option.value
    ).value;
    this.clientId.setValue(this.selectedClient);
  }
  driverSelected(event) {
    this.selectedDriver = this.drivers.find(
      (x) => x.viewValueEn == event.option.value
    ).value;
    this.driverId.setValue(this.selectedDriver);
  }
  areaGroupSelected(event) {
    const selectedAreaGroup = this.areaGroups.find(
      (x) => x.groupName == event.option.value
    ).id;
    this.areaGroupId.setValue(selectedAreaGroup);
  }
  areaSelected(event) {
    const selectedArea = this.areas.find(
      (x) => x.viewValueEn == event.option.value
    ).value;
    this.areaId.setValue(selectedArea);
  }
  changeOrderStatus(event, id) {
    console.log(event, id);
    let request = { orderStatusId: event, id: id };
    this.baseService
      .postItemTextReponse(Controllers.Order, Actions.UpdateDetails, request)
      .subscribe(
        (response) => {
          this.notification.showNotification(response, 'success');
        },
        (error) => {
          this.notification.showNotification('somethingWentWrong', 'failed');
        }
      );
  }
  changeOrderPrice(event, id) {
    console.log(event, id);
    let request = {
      id: id,
      orderTotalPrice: event.target.value,
    };
    this.baseService
      .postItemTextReponse(Controllers.Order, Actions.UpdateDetails, request)
      .subscribe(
        (response) => {
          this.notification.showNotification(response, 'success');
        },
        (error) => {
          console.log(error);
          this.notification.showNotification('somethingWentWrong', 'failed');
        }
      );
  }
  changeOrderItemDescription(event, id) {
    console.log(event, id);
    let request = {
      id: id,
      orderItemTypeDescription: event.target.value,
    };
    this.baseService
      .postItemTextReponse(Controllers.Order, Actions.UpdateDetails, request)
      .subscribe(
        (response) => {
          console.log(response);
          this.notification.showNotification(response, 'success');
        },
        (error) => {
          this.notification.showNotification('somethingWentWrong', 'failed');
        }
      );
  }

  navigateToDetails(id) {
    this.router.navigate([`/order-management/order-admin-details/${id}`]);
  }
  navigateToUpdate(id) {
    this.router.navigate([`/order-management/update/${id}`]);
  }
  navigateToCreate() {
    this.router.navigate([`/order-management/create`]);
  }
  navigateToMerchant(id) {
    this.router.navigate(['/forms/client-details/' + id]);
  }
  ngOnDestroy() {}
  public updateOrder(orderId) {
    this.router.navigate([`/forms/order-update/` + orderId]);
  }
  public viewOrder(orderId) {
    this.router.navigate([`/forms/order-details/` + orderId]);
  }
  public createOrder() {
    this.router.navigate([`/forms/order-create/`]);
  }
  public pageChanged(event: any) {
    this.getListData(event.pageSize, event.pageIndex + 1);
  }
}
