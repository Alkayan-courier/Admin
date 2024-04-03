import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { Actions, Controllers } from '../../../shared/global-variables/api-config';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { DynamicListInput } from '../../../shared/models/dynamic-list.model';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { ListActionTypeEnum } from '../../../shared/enums/enums';
import { ListActionClickedOutput } from '../../../shared/models/list-action-clicked-output';
import { YesNoDialogComponent } from '../../../shared/shared-components/yes-no-dialog/yes-no-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-status-list',
  templateUrl: './order-status-list.component.html',
  styleUrls: ['./order-status-list.component.css']
})
export class OrderStatusListComponent implements OnInit {
  public orderStatuses: FieldListData[] = [];
  constructor(private dynamicService: DynamicDataService,
    private baseService: BaseService,
    private spinner: NgxSpinnerService ,
       private dialog: MatDialog,
    private notification: NotificationService, 
    private router: Router
  ) { }
  public dynamicFormInput = new DynamicFormInput();
  public dynamicListInput = new DynamicListInput();
  public isLoading = true;
  public pageSize = 10;
  public pageNumber = 1;
  public cities: FieldListData[] = [];
  public areasList: any[] = [];
  public areaGroups: FieldListData[] = [];
  ngOnInit(): void { this.spinner.show();
    this.getFormData();
    this.getListSettings();

  }
  public getFormData() {
        this.dynamicService.getFormSettings('OrderStatusSearchForm').subscribe(res => {
          this.dynamicFormInput = res;   
          this.baseService.getAllForList(Controllers.OrderStatus).subscribe(res => {
      });
    });
  }
  public getListSettings() {
    this.baseService.getAllForList(Controllers.OrderStatus).subscribe(res => {
      this.cities = res;
    
      
        this.dynamicService.getListSettings('OrderStatusList').subscribe(res => {
          console.log(res);
          this.dynamicListInput = res;
          this.getListData();
        
      });
    });
  }
  public getListData(pageSize?: number, pageNumber?: number) {
    let request = {
      pageSize: pageSize ? pageSize : this.pageSize,
      pageNumber: pageNumber ? pageNumber : this.pageNumber
    }
    this.baseService.postItem(Controllers.OrderStatus, Actions.GetList, request).subscribe(res => {
    
      this.cities = res.entities;
      this.dynamicListInput.data = this.cities;
      this.dynamicListInput.totalCount = res.totalCount;
      this.isLoading = false;
      this.spinner.hide();
    });
  }
  public serveAction(event: DynamicFormOutput) {
    event.data.pageSize = this.pageSize;
    event.data.pageNumber = this.pageNumber;
    this.baseService.postItem(Controllers.OrderStatus, Actions.GetList, event.data).subscribe(res => {
      this.areasList = res.entities;
      this.dynamicListInput.data = this.areasList;
      this.dynamicListInput.totalCount = res.totalCount;
      this.isLoading = false;
      this.spinner.hide();
    
    })
  }
  public serveListAction(event: ListActionClickedOutput) {
    switch (event.action) {
      case ListActionTypeEnum.Delete:
        {
          const dialogRef = this.dialog.open(YesNoDialogComponent, {
            width: '400px',
            data: {
              title: 'confirm',
              content: 'confirmDeleteMessage'
            }
          })

          dialogRef.afterClosed().subscribe(res => {
            if (res) {
              this.spinner.show();
        
              this.baseService.removeItemById(Controllers.OrderStatus, event.entityId).subscribe(res => {
                this.getListData(this.pageSize, this.pageNumber);
                this.isLoading = false;
                this.spinner.hide();
                console.log(res);
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

          break;
        }
      case ListActionTypeEnum.Edit:
        {
          this.router.navigate([`/forms/order-status-update/${event.entityId}`]);
          break;
        }
      case ListActionTypeEnum.View:
        {
          this.router.navigate([`/forms/order-status-details/${event.entityId}`]);
          break;
        }

      default:
        break;
    }

  }
  public pageChanged(event: PageEvent) {
    this.getListData(event.pageSize, event.pageIndex + 1);
  }
}
