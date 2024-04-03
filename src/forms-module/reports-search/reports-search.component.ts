
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import * as _moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { BaseService } from '../../shared/services/base.service';
import { Actions, Controllers } from '../../shared/global-variables/api-config';
import { NotificationService } from '../../shared/services/notification.service';
import { RoleTypes } from '../../shared/enums/enums';
import { LanguageService } from '../../shared/services/language.service';

const moment = _moment;
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
  selector: 'app-reports-search',
  templateUrl: './reports-search.component.html',
  styleUrls: ['./reports-search.component.css'],
  providers: [

    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class ReportsSearchComponent implements OnInit {
  merchants: any;
  drivers: any;
  layoutCtrl = new FormControl('fullWidth');
  filteredDriversOptions: Observable<any>;
  filteredMerchantsOptions: Observable<any>;
  merchantsControl = new FormControl();
  driversControl = new FormControl();
  selectedClient: any;
  selectedDriverId: any;
  from: any = null;
  to: any = null;
  selectedDriver: any;
  roundId: number;
  public disabled: boolean = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseService: BaseService,
    private notification: NotificationService,
    public languageService: LanguageService,

  ) {


  }
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  changeRadio() {
    this.validateForm();
  }

  isTracker = true;
  isDataEntry = true;
  isAdmin = true;
  isWithoutDates = false;

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
  }  public filteredOptionsWrapper = []; 
public filteredOptions: Observable<any[]>[];
  ngOnInit() {
    var storedForm = JSON.parse(sessionStorage.getItem('recordForm'));
    if (storedForm) {
      console.log(storedForm);
      this.filterForm.controls['ordersDateTo'].setValue(storedForm.ordersDateTo);
      this.filterForm.controls['ordersDateFrom'].setValue(storedForm.ordersDateFrom);

    }
    this.route.params.subscribe(params => {
      if (params.userType) {
        this.userType.setValue(Number(params.userType));
        this.roundId = params.roundId;
        this.isWithoutDates = true;
      }
    })
    this.getALlMerchants();
    this.getAllDrivers();

  }

  getALlMerchants() {
    this.baseService.getItemsByKey(Controllers.User, Actions.GetAllItems, 'role', this.userRolesEnum.Merchant).subscribe(res => {
      this.merchants = res;
      this.filteredMerchantsOptions = this.merchantsControl.valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : (value.viewValueEn || value.viewValueAr))),
        map(name => (name ? this.filterMerchantOptions(name, this.merchants) : this.merchants.slice()))
      );
    }, error => {
      this.notification.showNotification(error.error, 'Failed');
    });
  }
  displayDriverFn(selectedOption: any): string {
    return selectedOption && (selectedOption.viewValueEn || selectedOption.viewValueAr) ? (selectedOption.viewValueEn || selectedOption.viewValueAr) : '';
  } 
  displayMerchantFn(selectedOption: any): string {
    return selectedOption && (selectedOption.viewValueEn || selectedOption.viewValueAr) ? (selectedOption.viewValueEn || selectedOption.viewValueAr) : '';
  }

  private filterDriverOptions(value: any, data: any): any[] {
    const filterValue = value.toLowerCase();
    return data.filter(option => option.viewValueEn.toLowerCase().includes(filterValue) || option.viewValueAr.toLowerCase().includes(filterValue)
    );
  }
  private filterMerchantOptions(value: any, data: any): any[] {
    const filterValue = value.toLowerCase();
    return data.filter(option => option.viewValueEn.toLowerCase().includes(filterValue) || option.viewValueAr.toLowerCase().includes(filterValue)
    );
  }
  getAllDrivers() {
    this.baseService.getItemsByKey(Controllers.User, Actions.GetAllItems, 'role', this.userRolesEnum.Driver).subscribe(res => {
      this.drivers = res;
      this.filteredDriversOptions = this.driversControl.valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : (value.viewValueEn || value.viewValueAr))),
        map(name => (name ? this.filterDriverOptions(name, this.drivers) : this.drivers.slice()))
      );
    }, error => {
      this.notification.showNotification(error.error, 'Failed');
    });
  }



  merchantSelected(event) {
    this.selectedClient = this.merchants.find(x => x.value == event.option.value.value).value;
    this.clientId.setValue(this.selectedClient);
    this.validateForm();
  }
  driverSelected(event) {
    this.selectedDriver = this.drivers.find(x => x.value == event.option.value.value).value;
    this.driverId.setValue(this.selectedDriver);
    this.validateForm();
  }
  changeDate(value, type) {
    console.log('Date', value);
    if (type == 0) {
      this.from = value;

    } else {
      this.to = value;
    }
    this.validateForm();
  }

  validateForm() {
    const form = this.filterForm.value;
    if (form.ordersDateFrom == null || form.ordersDateTo == null) {
      this.disabled = true;
    }
    else {
      if (this.userType.value) {
        this.disabled = false;

      }
      else {
        this.disabled = true;
      }
    }

  }
  submit() {
    const form = this.filterForm.value;
    var storedForm = JSON.parse(sessionStorage.getItem('recordForm'));
    if (this.from != null) {
      this.filterForm.value.ordersDateFrom = this.getYear(this.from) + '-' + this.getMonth(this.from) + '-' + this.getDay(this.from) + 'T00:00:00.000Z';
    }
    else if (storedForm) {
      this.filterForm.value.ordersDateFrom = storedForm.ordersDateFrom;
    }
    if (this.to != null) {
      this.filterForm.value.ordersDateTo = this.getYear(this.to) + '-' + this.getMonth(this.to) + '-' + this.getDay(this.to) + 'T00:00:00.000Z';
    }
    else if (storedForm) {
      this.filterForm.value.ordersDateTo = storedForm.ordersDateTo;
    }



    sessionStorage.setItem("recordsearchfilter", JSON.stringify(form));
    sessionStorage.setItem('recordForm', JSON.stringify(this.filterForm.value));
    window.open('/#/reports-result', '_blank')
  }
  getDay(value) {
    return value.substring(0, 2);
  }
  getMonth(value) {
    return value.substring(3, 5);
  }
  getYear(value) {
    return value.substring(6, 10);
  }
}