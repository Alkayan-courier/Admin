import {  Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DynamicListInput } from '../../../shared/models/dynamic-list.model';
import { MatSort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { ListActionTypeEnum } from '../../../shared/enums/enums';
import { ListActionClickedOutput } from '../../../shared/models/list-action-clicked-output';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { BaseService } from '../../../shared/services/base.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FileSaverService } from 'ngx-filesaver';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit, DoCheck {

  @Input() listInput = new DynamicListInput();
  @Output() pageChangedEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  @Output() listActionClickedEvent: EventEmitter<ListActionClickedOutput> = new EventEmitter<ListActionClickedOutput>();
  public displayedColumns: string[];
  public imagesUrl = environment.host + "home/appimages/";
  public dataSource: MatTableDataSource<any>;
  public totalCount: number;
  @Input() pageNumber: number;
  @Input() pageSize: number;
  @ViewChild(MatSort) public sort: MatSort;
  public get actionTypeEnum(): typeof ListActionTypeEnum {
    return ListActionTypeEnum;
  }
  constructor(
    public _MatPaginatorIntl: MatPaginatorIntl, 
    private translate: TranslateService,
    private baseService:BaseService,
    private spinner:NgxSpinnerService,
    private fileSaverService: FileSaverService,
    private notification: NotificationService,
    ) {

  }
  ngDoCheck(): void {
    this.dataSource = new MatTableDataSource(this.listInput.data);
    this.totalCount = this.listInput.totalCount;
  }

  ngOnInit(): void {
    this._MatPaginatorIntl.itemsPerPageLabel = this.translate.instant('itemsPerLbl');
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

    console.log(this.listInput.data);
    this.dataSource = new MatTableDataSource(this.listInput.data);
    this.dataSource.sort = this.sort;
    this.totalCount = this.listInput.totalCount;
    this.displayedColumns = this.listInput.columns.map(c => c.columnName);
    console.log('Col',this.displayedColumns);
  }


  public pageChanged(event: PageEvent) {
    this.spinner.show();
    this.pageChangedEvent.emit(event);
  }
  public listActionClicked(entityId: number, action: ListActionTypeEnum) {
    var output = new ListActionClickedOutput();
    output.entityId = entityId;
    output.action = action;
    this.listActionClickedEvent.emit(output);
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
