import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { RoleTypes } from '../../shared/enums/enums';
import { Actions, Controllers } from '../../shared/global-variables/api-config';
import { BaseService } from '../../shared/services/base.service';
import * as _moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { FieldListData } from '../../shared/models/dynamic-form-field';

const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};
@Component({
  selector: 'app-reports-generator',
  templateUrl: './reports-generator.component.html',
  styleUrls: ['./reports-generator.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class ReportsGeneratorComponent implements OnInit {

  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  public clients: FieldListData[] = [];
  drivers: any=[];
  layoutCtrl = new FormControl('fullWidth'); 
  filteredDriversOptions: Observable<any>;
  filteredClientsOptions: Observable<any>;
  clientsControl = new FormControl();
  driversControl = new FormControl();
  selectedClient: any;
  selectedDriverId: any;
  selectedDriver: any;
  isTracker = false;
  isDataEntry = false;
  isAdmin = true;

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit() {
    this.validateReports();
    this.getALlClients();
    this.getAllDrivers();
    const token = localStorage.getItem("recordsearchfilter");
    if (token) {
      const searchForm = JSON.parse(token);
      this.filterForm.patchValue(searchForm);
      console.log(this.filterForm.value)
    }


  }
  validateReports() {
    const userRoles = JSON.parse(localStorage.getItem('SamaDelivery.roles'));
    const fullName = localStorage.getItem('SamaDelivery.FullName');
    console.log(userRoles);
    if (!userRoles) {
      return;
    }
    const hours = new Date().getHours();
    console.log(hours);
    if (userRoles.find(x => x == 'Tracker') && userRoles.length == 1) {
      this.isTracker = true;
    }
    if (userRoles.find(x => x == 'DataEntry') && userRoles.length == 1 && fullName == 'احمد جراد') {
      this.isDataEntry = true;
    }
   /*  if (userRoles.find(x => x == 'Admin' || x == 'Manager' || x == 'Accountant')) {
      this.isAdmin = true;
    } */

  }
  filterForm = new FormGroup({
    clientId: new FormControl(),
    driverId: new FormControl(),
    userType: new FormControl(),
    ordersDateFrom: new FormControl(),
    ordersDateTo: new FormControl(),
    pageSize: new FormControl(),
    pageNumber: new FormControl(),
  })

  get clientId() {
    return this.filterForm.get('clientId') as FormControl;
  }
  get userType() {
    return this.filterForm.get('userType') as FormControl;
  }
  get driverId() {
    return this.filterForm.get('driverId') as FormControl;
  }


  get ordersDateFrom() {
    return this.filterForm.get('ordersDateFrom') as FormControl;
  }

  get ordersDateTo() {
    return this.filterForm.get('ordersDateTo') as FormControl;
  }

  get PageSize() {
    return this.filterForm.get('pageSize') as FormControl;
  }
  get PageNumber() {
    return this.filterForm.get('pageNumber') as FormControl;
  }
  

  public getALlClients() {
    this.baseService.getItemsByKey(Controllers.User, Actions.GetAllItems, 'role', this.userRolesEnum.Merchant).subscribe(res => {
     console.log('Client', this.clients)
      this.clients = res;

      this.filteredClientsOptions = this.clientsControl.valueChanges
        .pipe(
          startWith(''),
          map(value => (typeof value === 'string' ? value : value.viewValueEn)),
          map(name => (name ? this._filterClients(name) : this.clients.slice()))
        );
    });

  }

  public getAllDrivers() {
    this.baseService.getItemsByKey(Controllers.User, Actions.GetAllItems, 'role', this.userRolesEnum.Driver).subscribe(res => {
      this.drivers = res;
      this.filteredDriversOptions = this.driversControl.valueChanges
        .pipe(
          startWith(''),
          map(value => (typeof value === 'string' ? value : value.viewValue)),
          map(name => (name ? this._filterDrivers(name) : this.drivers.slice()))
        );
    });
  }
  public displayFn(data: any): string {
    return data && data.viewValue ? data.viewValue : '';
  }
  private _filterDrivers(value: string) {
    console.log(value)
    const filterValue = value.toLowerCase();
    return this.drivers.filter(option => option.viewValue.toLowerCase().includes(filterValue));
  }
  private _filterClients(value: string) {
    console.log(value)
    const filterValue = value.toLowerCase();
    return this.clients.filter(option => option.viewValueEn.toLowerCase().includes(filterValue));
  }

  clientSelected(event) {
    this.selectedClient = this.clients.find(x => x.value == event.option.value.value).value;
    this.clientId.setValue(this.selectedClient)
  }
  driverSelected(event) {
    this.selectedDriver = this.drivers.find(x => x.value == event.option.value.value).value;
    this.driverId.setValue(this.selectedDriver)
  }

  filterOrders() {
    const form = this.filterForm.value;
    localStorage.setItem("recordsearchfilter", JSON.stringify(form));
    localStorage.setItem('recordForm', JSON.stringify(this.filterForm.value));
    window.open('/#/records-result', '_blank')
  }

}
