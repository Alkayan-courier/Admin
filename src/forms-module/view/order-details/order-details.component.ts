import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { Actions, Controllers } from '../../../shared/global-variables/api-config';
import { BaseService } from '../../../shared/services/base.service';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { NotificationService } from '../../../shared/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDetailPageModel } from '../../../shared/models/dynamic-details.model';
import { ListActionTypeEnum } from '../../../shared/enums/enums';
import { ListActionClickedOutput } from '../../../shared/models/list-action-clicked-output';
import { DynamicListInput } from '../../../shared/models/dynamic-list.model';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from '../../../shared/shared-components/yes-no-dialog/yes-no-dialog.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private dynamicService: DynamicDataService,
    private notification: NotificationService,  private dialog: MatDialog,
    private translate: TranslateService, private router: Router
  ) { }
  public orderNoteId: number;
  public order: any;
  public detailsInput = new DynamicDetailPageModel();
  public isLoading = true;
  public notes: any[] = [];
  public areaGroups: FieldListData[] = [];
  public dynamicFormInput = new DynamicFormInput();
  public dynamicListInput = new DynamicListInput();
  public pageSize = 10;
  dataSource: MatTableDataSource<any>;
  public pageNumber = 1;
  public areasList: any[] = [];

  ngOnInit(): void {
    this.spinner.show();
    this.route.params.subscribe(params => {
     this.orderNoteId = params.id;
     this.getAsync(params.id); 
    
    })
  }
  public getAsync(id: number) {
    this.baseService.getById(Controllers.Order, id).subscribe(res => {     
      this.order = res;
      console.log(res);
      this.detailsInput.dataObject = this.order;   
      this.isLoading = false;     
      this.spinner.hide(); 
    }) 
  }
   public getListSettings() {
    this.dynamicService.getListSettings('OrderNotesList').subscribe(res => {
      this.order = res;
      this.dynamicListInput =this.order;
   
      this.getListData();
      
    });
  }

  public exportPdf(){ 
     let request = {
       ordersId:1
  }
    this.baseService.downloadPdf(Controllers.Order, Actions.ExportPdf, request).subscribe(res => {
     console.log(res);
      // var a = document.createElement("a");
      // const blob = new Blob([res.body], { type:res.body.type });
      // a.href = URL.createObjectURL(blob);
      // a.download = 'OrderDetails.pdf';
      // a.click();
    });
  }
  public getListData(pageSize?: number, pageNumber?: number) {
    let request = {
      pageSize: pageSize ? pageSize : this.pageSize,
      pageNumber: pageNumber ? pageNumber : this.pageNumber,
      orderId :  this.orderNoteId
    }
    console.log('Request',request);
    this.baseService.postItem(Controllers.OrderNotes, Actions.GetList, request).subscribe(res => {
      console.log(res);
      this.notes = res.entities;
      this.dynamicListInput.data =this.notes;
      this.dynamicListInput.totalCount = res.totalCount;
 
      this.isLoading = false;
      this.spinner.hide();
    });
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
        
              this.baseService.removeItemById(Controllers.Order, event.entityId).subscribe(res => {
                this.getListData(this.pageSize, this.pageNumber);
                this.isLoading = false;
                this.spinner.hide();
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
          this.router.navigate([`/forms/order-update/${event.entityId}`]);
          break;
        }
      case ListActionTypeEnum.View:
        {
          this.router.navigate([`/forms/order-details/${event.entityId}`]);
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



