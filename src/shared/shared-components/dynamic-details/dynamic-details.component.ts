import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PageDetailsAction } from '../../../shared/models/dynamic-action.model';
import { DynamicDetailPageModel } from '../../../shared/models/dynamic-details.model';
import { Location } from '@angular/common';
import { BaseService } from '../../../shared/services/base.service';
import { FileSaverService } from 'ngx-filesaver';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-dynamic-details',
  templateUrl: './dynamic-details.component.html',
  styleUrls: ['./dynamic-details.component.scss']
})
export class DynamicDetailsComponent implements OnInit {

  constructor(private _location: Location, 
    private spinner: NgxSpinnerService,
    private baseService: BaseService,
    private fileSaverService: FileSaverService,
    private notification: NotificationService,
    ) { }
  @Input() detailsInput = new DynamicDetailPageModel();
  @Output() actionSubmitted: EventEmitter<PageDetailsAction> = new EventEmitter<PageDetailsAction>();
  public properties = [];
  ngOnInit(): void {
    Object.keys(this.detailsInput.dataObject).forEach(e => {
      if (e !== 'id' && !e.includes('Id')) {
        if (this.detailsInput.dataObject[e] === false) {
          console.log(this.detailsInput.dataObject[e]);
        }
        this.properties.push(e);
      }
    }
    );
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
