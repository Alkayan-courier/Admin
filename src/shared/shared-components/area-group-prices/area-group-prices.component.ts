import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseService } from '../../../shared/services/base.service';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-area-group-prices',
  templateUrl: './area-group-prices.component.html',
  styleUrls: ['./area-group-prices.component.css']
})
export class AreaGroupPricesComponent implements OnInit {

  public pageSize = 10;
  public pageNumber = 1;
  public totalCount: number;
  @Input() public clientId: number;

  public displayedColumns: string[] = [
    'areaGroupNameEn',
    'areaGroupNameAr',
    'price',
    'actions'
  ];
  public dataSource: MatTableDataSource<any>;
  constructor(
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private notification: NotificationService

  ) {
  }
  ngOnInit() {
    this.spinner.show();
    this.getAllPrices(this.pageSize, this.pageNumber);
  }
  getAllPrices(pageSize: number, pageNumber: number) {
    let request = {
      pageSize,
      pageNumber,
      userId: this.clientId
    }
    this.baseService.getClienAreaGroupPrices(request).subscribe(res => {
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
  pageChanged(page: PageEvent) {
    this.pageSize = page.pageSize;
    this.pageNumber = page.pageIndex + 1;
    this.getAllPrices(page.pageSize, page.pageIndex + 1)
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

}
