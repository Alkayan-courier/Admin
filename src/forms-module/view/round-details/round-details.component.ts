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
  selector: 'app-round-details',
  templateUrl: './round-details.component.html',
  styleUrls: ['./round-details.component.css']
})
export class RoundDetailsComponent implements OnInit {

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
    this.baseService.getById(Controllers.FinancialRound, id).subscribe(res => {
      console.log(res);
      this.record = res;
      this.detailsInput.dataObject = this.record;
      this.isLoading = false;
    }) 
  }
  
}
