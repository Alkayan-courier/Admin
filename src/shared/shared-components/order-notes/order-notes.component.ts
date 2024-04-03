import { Component, Input, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actions, Controllers } from '../../../shared/global-variables/api-config';
import { BaseService } from '../../../shared/services/base.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { FileSaverService } from 'ngx-filesaver';
import { environment } from '../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteDialogComponent } from '../add-note-dialog/add-note-dialog.component';

@Component({
  selector: 'app-order-notes',
  templateUrl: './order-notes.component.html',
  styleUrls: ['./order-notes.component.css']
})
export class OrderNotesComponent implements OnInit {

  public pageSize = 10;
  public pageNumber = 1;
  public totalCount: number;
  @Input() public orderNotesId: number;
  public imagesUrl = environment.imagesUrl;

  public displayedColumns: string[] = [
    'orderNoteText',
    'createdDate',
    'createdBy',
    'orderFilePath'
   
  ];
  public dataSource: MatTableDataSource<any>;
  constructor(
    private baseService: BaseService, 
    public _MatPaginatorIntl: MatPaginatorIntl,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private notification: NotificationService,
    private fileSaverService: FileSaverService,
     private dialog: MatDialog
  ) {
  }
  ngOnInit() { this._MatPaginatorIntl.itemsPerPageLabel = this.translate.instant('itemsPerLbl');
  this._MatPaginatorIntl.nextPageLabel = this.translate.instant('nextPageLbl');
  this._MatPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 à ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} ` + this.translate.instant('of') + ` ${length}`;
  };
    console.log('Notes Comp');
    this.spinner.show();
    this.getNotes(this.pageSize, this.pageNumber);
  }
  getNotes(pageSize: number, pageNumber: number) {
    let request = {
      pageSize,
      pageNumber,
      orderId: this.orderNotesId
    }
    console.log(request)
    this.baseService.postItem(Controllers.OrderNotes, Actions.GetList, request).subscribe(res => {
      console.log(res);
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
    })

  } 
   public addNote() {
    const dialogRef = this.dialog.open(AddNoteDialogComponent, {
      width: '700px',
      data: {
        title: 'addNote',
        orderId : this.orderNotesId,
        content: 'chooseYourDriver'
      },
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe(res => {
      this.getNotes(this.pageSize, this.pageNumber);
    })
  }
  pageChanged(page: PageEvent) {
    this.pageSize = page.pageSize;
    this.pageNumber = page.pageIndex + 1;
    this.getNotes(page.pageSize, page.pageIndex + 1)
  }
  public updatePrice(price) {
    this.baseService.updateAreaGroupClientPrices(price).subscribe(res => {
      this.spinner.hide();
      this.notification.showOriginalNotification(res, 'success');
    }, error => {
      if (error.status === 400) {
        this.notification.showNotification(error.error, 'danger');
      }
      else {
        this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
      }
      this.spinner.hide();
    })
  }
  public downloadFile(fileName:string) {
    this.spinner.show();
    return this.baseService.downloadFile(fileName).subscribe(res => {
      this.fileSaverService.save(res, fileName);
      this.spinner.hide();
    }, error => {
      if (error.status === 400) {
        this.notification.showNotification(error.error, 'danger');
      }
      else {
        this.notification.showNotification('somethingWentWrong', 'danger');
      }
      this.spinner.hide();
    })
  }
}
