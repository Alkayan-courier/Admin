import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListActionTypeEnum } from '../../shared/enums/enums';
import { Controllers, Actions } from '../../shared/global-variables/api-config';
import { DynamicDetailPageModel } from '../../shared/models/dynamic-details.model';
import { FieldListData } from '../../shared/models/dynamic-form-field';
import { DynamicFormInput } from '../../shared/models/dynamic-form-input';
import { DynamicListInput } from '../../shared/models/dynamic-list.model';
import { ListActionClickedOutput } from '../../shared/models/list-action-clicked-output';
import { BaseService } from '../../shared/services/base.service';
import { DynamicDataService } from '../../shared/services/dynamic-form.service';
import { NotificationService } from '../../shared/services/notification.service';
import { YesNoDialogComponent } from '../../shared/shared-components/yes-no-dialog/yes-no-dialog.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-public-order-details',
  templateUrl: './public-order-details.component.html',
  styleUrls: ['./public-order-details.component.css']
})
export class PublicOrderDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dynamicService: DynamicDataService,
    private notification: NotificationService, private dialog: MatDialog,
    private translate: TranslateService,
    private router: Router
  ) { }
  public orderNoteId: number;
  public order: any;
  public orderDriver: any;
  public detailsInput = new DynamicDetailPageModel();
  public driverDetailsInput = new DynamicDetailPageModel();
  public isLoading = true;
  public notes: any[] = [];
  public areaGroups: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  public dynamicListInput = new DynamicListInput();
  public imagesUrl = environment.host + "home/appimages/";
  public pageSize = 10;
  dataSource: MatTableDataSource<any>;
  public pageNumber = 1;
  public areasList: any[] = [];

  ngOnInit(): void {
    this.spinner.show();
    this.route.params.subscribe(params => {
      this.getAsync(params.id);
    })
  }
  public getAsync(id: number) {
    this.baseService.getForPublic(Controllers.Order, id).subscribe(res => {
      this.order = res;
      this.detailsInput.dataObject = this.order;
      this.getDriverDetailsByOrderId(id);
    })
  }
  public getDriverDetailsByOrderId(id: number) {
    this.baseService.getDriverDetailsByOrderId(Controllers.Order, id).subscribe(res => {
      this.orderDriver = res;
      this.driverDetailsInput.dataObject = this.orderDriver;
      this.isLoading = false;
      this.spinner.hide();
    })
  }



}
