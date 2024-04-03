import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actions, Controllers } from '../../../shared/global-variables/api-config';
import { AuthorizeService } from '../../../auth/authorize.service';
import { DashboardResponse } from '../../../shared/models/dashboard-model';
import { BaseService } from '../../../shared/services/base.service';
import { LanguageService } from '../../../shared/services/language.service';
import { AddEndUserDialogComponent } from '../add-end-user-dialog/add-end-user-dialog.component.ts.component';
import { MatDialog } from '@angular/material/dialog';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public orderStatuses: DashboardResponse[] = [];
  public isAuthorizedToView = true;
  public isLoading = true;
  public dynamicFormInput = new DynamicFormInput();
  filterForm = new FormGroup({
    from: new FormControl(),
    to: new FormControl(),
    pageSize: new FormControl(10),
    pageNumber: new FormControl(1)
  });
  constructor(
    private dashboardService: BaseService,
    private spinner: NgxSpinnerService,
    private authService: AuthorizeService,
    public languageService: LanguageService,
    private dialog: MatDialog,
    public dynamicService: DynamicDataService
    ) { }
 /*  public startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  }; */
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };
  ngOnInit() {
    this.spinner.show();
    const userRoleExist = this.authService.getLoggedInUsersRole().find(x => x == 'DataEntry');
    if (userRoleExist) {
      this.isAuthorizedToView = false;
      this.spinner.hide();
    }
    else {
      this.getFormData();
    }
  }
  downloadExcel() {
    this.dashboardService.downloadExcel(Controllers.Order, Actions.DownloadExcel).subscribe(res => {
      console.log(res);
       var a = document.createElement("a");
       const blob = new Blob([res.body], { type:res.body.type });
       a.href = URL.createObjectURL(blob);
       a.download = 'Order-Details.csv';
       a.click();
     });
  } 
  addEndUserTestData(){
    const dialogRef = this.dialog.open(AddEndUserDialogComponent, {
      width: '700px',
      data: {
        title: 'Add Test Data',
        content: 'Add Test Data',
        dialogType:1
      },
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.spinner.show();
        let request = {
          endUserPhoneNumber: res,
          numberOfOrders: 5,
          clientBrandId:11,
          clientId:49
        }
        console.log('Add Record',request);
        this.dashboardService.postItem(Controllers.TestData, Actions.PostItem, request).subscribe(res => {
         console.log(res);
          this.spinner.hide();
         
        }, error => {
          if (error.status === 400) {
          }
          else {
          }
          this.spinner.hide();
        });
      }
    })
  } 
  addMerchantTestData(){
    const dialogRef = this.dialog.open(AddEndUserDialogComponent, {
      width: '700px',
      data: {
        title: 'Add Test Data',
        content: 'Add Test Data',
        dialogType:2
      },
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.spinner.show();
        let request = {
          endUserPhoneNumber: "",
          numberOfOrders: 5,
          clientBrandId:11,
          clientId:res
        }
        console.log('Add Record',request);
        this.dashboardService.postItem(Controllers.TestData, Actions.PostItem, request).subscribe(res => {
         console.log(res);
          this.spinner.hide();
         
        }, error => {
          if (error.status === 400) {
          }
          else {
          }
          this.spinner.hide();
        });
      }
    })
  } 
  addDriverTestData(){
    const dialogRef = this.dialog.open(AddEndUserDialogComponent, {
      width: '700px',
      data: {
        title: 'Add Test Data',
        content: 'Add Test Data',
        dialogType:3
      },
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.spinner.show();
        let request = {
          endUserPhoneNumber: "",
          numberOfOrders: 5,
          clientBrandId:11,
          driverId:res,
          clientId:null
        }
        this.dashboardService.postItem(Controllers.TestData, Actions.PostItem, request).subscribe(res => {
         console.log(res);
          this.spinner.hide();
         
        }, error => { 
          if (error.status === 400) {
          }
          else {
          }
          this.spinner.hide();
        });
      }
      var a = document.createElement("a");
      const blob = new Blob([res.body], { type: res.body.type });
      a.href = URL.createObjectURL(blob);
      a.download = 'Order-Details.csv';
      a.click();
    });
  }
  public getFormData() {
    this.dynamicService.getFormSettings('DashboardSearchForm').subscribe(res => {
      this.dynamicFormInput = res;
      this.isLoading = false;
      this.getConfig();
    });
  }
  public serveAction(event: DynamicFormOutput) {
    this.dashboardService.getDashboardData(event.data).subscribe(res => {
      this.orderStatuses = res;
      this.isLoading = false;
      this.spinner.hide();
    })
  }
 
 
  getConfig() {
    const form = this.filterForm.value;
    form.from = this.convertToUTC(form.from);
    form.to = this.convertToUTC(form.to);
    this.dashboardService.getDashboardData(form).subscribe(res => {
      this.orderStatuses = res;
      console.log(this.orderStatuses)
      this.spinner.hide()
    }, error => {
      this.spinner.hide();
    })
  }
  convertToUTC(date: Date): Date {
    if (date) {
      date = new Date(date);
      return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    } else { return null; }
  }

}
