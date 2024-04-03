import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as _moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { BaseService } from '../../../src/shared/services/base.service';
import { Controllers } from '../../../src/shared/global-variables/api-config';
import { LanguageService } from '../../shared/services/language.service';


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
  selector: 'app-move-orders-dialog',
  templateUrl: './move-orders-dialog.component.html',
  styleUrls: ['./move-orders-dialog.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class MoveOrdersDialogComponent implements OnInit {

  form = new FormGroup({
    areaGroupId: new FormControl('', Validators.required),
    recordId: new FormControl('', Validators.required),
    recordDate: new FormControl('', Validators.required),
    type: new FormControl()
  })

  get recordDate() {
    return this.form.get('recordDate') as FormControl;
  }
  get type() {
    return this.form.get('type') as FormControl;
  }

  get recordId() {
    return this.form.get('recordId') as FormControl;
  }
  get areaGroupId() {
    return this.form.get('areaGroupId') as FormControl;
  }


  getRecords() {
    console.log(this.form.value)
    if (this.recordDate.value && this.areaGroupId.value) {
      this.getAllRecords();
    }
  }
  convertToUTC(date: Date): Date {
    if (date) {
      date = new Date(date);
      return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    } else { return null; }
  }
  recordList = [];
  getAllRecords() {
    this.baseService.getAll(Controllers.Record).subscribe(res => {
      console.log('Records', res);

      this.recordList = res;

    }, error => {
    });
  }


  changeRadio() {
    this.getAllRecords();
    console.log(this.type.value)
    if (this.type.value == 1) {
      this.recordId.setValue(-1);
    }

  }

  constructor(
    private baseService: BaseService,
    public dialogRef: MatDialogRef<MoveOrdersDialogComponent>,
    public languageService: LanguageService,

  ) { }

  ngOnInit() {
    this.getAllAreaGroups();
  }
  areaGroups: any;
  onNoClick(): void {
    this.dialogRef.close();
  }
  getAllAreaGroups() {
    this.baseService.getAllItems(Controllers.AreaGroup).subscribe(res => {
      console.log('Area Groups', res);
      this.areaGroups = res;
    });
  }
}