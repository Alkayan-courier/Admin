import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from '../../services/notification.service';
import { RoleTypes } from '../../enums/enums';
import { Controllers, Actions } from '../../global-variables/api-config';
import { FieldListData } from '../../models/dynamic-form-field';
import { BaseService } from '../../services/base.service';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicDataService } from '../../../shared/services/dynamic-form.service';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { ActivatedRoute, Router } from '@angular/router';

export interface DialogData {
  title: string;
  content: string;
  orderId:string
}
@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.css']
})
export class AddNoteDialogComponent implements OnInit {
  selectedDriver: any;
  filteredOptions: any;
 
  orderId : any;
    public dynamicFormInput = new DynamicFormInput();
  public isLoading = true;
  filterForm = new FormGroup({
    orderId: new FormControl(),
    orderNoteText: new FormControl(), 
    uploadFile :  new FormControl()
  })
  public selectedFile;
  public filesWrapper: any[] = [];
  public get userRolesEnum(): typeof RoleTypes {
    return RoleTypes;
  }
  constructor(
    public dialogRef: MatDialogRef<AddNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public languageService: LanguageService,
    public baseService: BaseService,
    private notification: NotificationService,
    private translate: TranslateService,
    private spinner: NgxSpinnerService, 
     private dynamicService: DynamicDataService,
     private router: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    console.log(this.data);
  this.orderId = this.data.orderId;
    this.spinner.show();
    this.getFieldsData();
  
  }
  public getFieldsData() {  
        this.dynamicService.getFormSettings('AddNoteForm').subscribe(res => {
          this.dynamicFormInput = res;
          this.isLoading = false;
          this.spinner.hide();
        });  
  }
  public serveAction(event: DynamicFormOutput) {
    if(event.data.orderNoteText =='' && event.data.file ==''){
 this.spinner.hide();
 this.notification.showNotification(this.translate.instant('oneFieldShouldBeFilled'), 'danger');
    }
   else{
     
    let formData=new FormData();
    console.log(event.data);
    Object.entries(event.data).forEach(element => {
      var file;
      if (element[0] == 'file') {
        file = element[1] as Blob;
        formData.append(element[0], file);
      }
      else{
        formData.append(element[0], element[1] as string);
      }
    });
    formData.append('orderId',this.orderId);
console.log(formData);
    this.baseService.postFormItem(Controllers.OrderNotes, Actions.PostItem, formData).subscribe(res => {
      this.spinner.hide(); this.dialogRef.close();
      this.notification.showNotification(res, 'success');
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
  onNoClick(): void {
    this.dialogRef.close();
  }
  onDriverSelected(driverId: number) {
    this.dialogRef.close(driverId);
  }

}
