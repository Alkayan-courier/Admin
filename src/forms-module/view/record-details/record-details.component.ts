import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { Actions, Controllers } from '../../../shared/global-variables/api-config';
import { BaseService } from '../../../shared/services/base.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { NotificationService } from '../../../shared/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDetailPageModel } from '../../../shared/models/dynamic-details.model';
import { AvailableDriversDialogComponent } from '../../../shared/shared-components/available-drivers-dialog/available-drivers-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.css']
})
export class RecordDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private notification: NotificationService,
    private translate: TranslateService,
    private dialog: MatDialog,
  ) { }
  public recordId: number;
  public record: any;
  public detailsInput = new DynamicDetailPageModel();
  public isLoading = true;
  public cities: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recordId = params.id;
      this.getAsync(this.recordId);
    })
  }
  public getAsync(id: number) {
    this.baseService.getById(Controllers.Record, id).subscribe(res => {
      console.log(res);
      this.record = res;
      this.detailsInput.dataObject = this.record;
      this.isLoading = false;
    }) 
  }
  public openAvailableDriversDialog() {
    const dialogRef = this.dialog.open(AvailableDriversDialogComponent, {
      width: '700px',
      data: {
        title: 'choose',
        content: 'chooseYourDriver'
      },
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.spinner.show();
        let request = {
          DriverId: res,
          RecordId: this.recordId
        }
        console.log('Assign Record',request);
        this.baseService.postItemTextReponse(Controllers.Record, Actions.AssignRecordToDriver, request).subscribe(res => {
         console.log(res);
          this.spinner.hide();
          this.getAsync(this.recordId)
          this.notification.showNotification(res, 'success')
        }, error => {
          if (error.status === 400) {
            this.notification.showNotification(error.error, 'danger');
          }
          else {
            this.notification.showNotification('somethingWentWrong', 'danger');
          }
          this.spinner.hide();
        });
      }
    })
  }
}
