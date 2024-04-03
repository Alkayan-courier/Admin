import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from '../../../shared/services/notification.service';
import { RoleTypes } from '../../../shared/enums/enums';
import { Controllers, Actions } from '../../../shared/global-variables/api-config';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { BaseService } from '../../../shared/services/base.service';
import { LanguageService } from '../../../shared/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

export interface DialogData {
  title: string;
  content: string;
}
@Component({
  selector: 'app-available-drivers-dialog',
  templateUrl: './available-drivers-dialog.component.html',
  styleUrls: ['./available-drivers-dialog.component.css']
})
export class AvailableDriversDialogComponent implements OnInit {
  public pageSize = 10;
  public pageNumber = 1;
  public totalCount: number;
  public drivers: FieldListData[] = [];
  driversControl = new FormControl();
  selectedDriver: any;
  filteredOptions: any;
  filterForm = new FormGroup({
    userId: new FormControl(),
  })
  public driverList: any[] = [];
  public displayedColumns: string[] = [
    'fullName',
    'phoneNumber'
  ];
  public dataSource: MatTableDataSource<any>;
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  constructor(
    public dialogRef: MatDialogRef<AvailableDriversDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public languageService: LanguageService,
    public baseService: BaseService,
    private notification: NotificationService,
    private translate: TranslateService,
    private spinner: NgxSpinnerService,
  ) {

  }
  ngOnInit(): void {
    this.spinner.show();
    this.getAllDrivers();
  }
  get driverId() {
    return this.filterForm.get('userId') as FormControl;
  }
  getAllDrivers() {
    this.baseService.postItem(Controllers.User, Actions.GetActiveDriversList, this.filterForm.value).subscribe(res => {
      this.drivers = res;
      console.log(this.drivers);

      this.filteredOptions = this.driversControl.valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : (value.viewValueEn || value.viewValueAr))),
        map(name => (name ? this.filterOptions(name, this.drivers) : this.drivers.slice()))
      );
      this.getAvailableDrivers();
    }, error => {
      this.notification.showNotification(error.error, 'Failed');
      this.spinner.hide();
    });
  }

  public getAvailableDrivers(pageSize?: number, pageNumber?: number) {
    let request = {
      pageSize: pageSize ? pageSize : this.pageSize,
      pageNumber: pageNumber ? pageNumber : this.pageNumber,
      role: this.userRolesEnum.Driver,
      isActive: true,
      userId: this.driverId.value
    }
    this.baseService.postItem(Controllers.User, Actions.GetList, request).subscribe(res => {

      this.driverList = res.entities;
      this.dataSource = new MatTableDataSource<Element>(res.entities);
      this.totalCount = res.totalCount;
      this.spinner.hide();
    }, error => {
      if (error.status === 400) {
        this.notification.showNotification(error.error, 'danger');
      }
      else {
        this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
      }
      this.spinner.hide();
    });
  }
  displayFn(selectedOption: any): string {
    return selectedOption && (selectedOption.viewValueEn || selectedOption.viewValueAr) ? (selectedOption.viewValueEn || selectedOption.viewValueAr) : '';
  }

  private filterOptions(value: any, data: any): any[] {
    const filterValue = value.toLowerCase();
    return data.filter(option => option.viewValueEn.toLowerCase().includes(filterValue) || option.viewValueAr.toLowerCase().includes(filterValue)
    );
  }


  public autoCompleteListSelected(event) {
    this.spinner.show()
    const control = this.drivers.find(x => x.value === event.option.value.value)
    this.driverId.setValue(control.value);
    this.getAvailableDrivers(this.pageSize, this.pageNumber);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onDriverSelected(driverId: number) {
    this.dialogRef.close(driverId);
  }
  pageChanged(page: PageEvent) {
    this.pageSize = page.pageSize;
    this.pageNumber = page.pageIndex + 1;
    this.getAvailableDrivers(page.pageSize, page.pageIndex + 1)
  }
}
