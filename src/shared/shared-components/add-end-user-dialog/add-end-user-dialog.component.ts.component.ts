import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Controllers, Actions } from '../../global-variables/api-config';
import { BaseService } from '../../services/base.service';
import { LanguageService } from '../../services/language.service';

export interface DialogData {
  title: string;
  content: string;
  dialogType: number
}
@Component({
  selector: 'app-add-end-user-dialog',
  templateUrl: './add-end-user-dialog.component.html',
  styleUrls: ['./add-end-user-dialog.component.css']
})
export class AddEndUserDialogComponent implements OnInit {
  endUserPhoneNumber: string;
  clientId: number;
  driverId: number;
  merchants:any;
  drivers:any;
  public isLoading = true;
  public dialogType: number; // 1- End User Orders 2- Merchant Orders 3- Driver Orders
  constructor(
    public dialogRef: MatDialogRef<AddEndUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public languageService: LanguageService,
    public baseService: BaseService,
  ) {

  }
  ngOnInit(): void {
    console.log(this.data);
    this.dialogType = this.data.dialogType;
    let request={
      role:3,
      pageSize:9999,
      pageNumber:1
    }
    let request2={
      role:2,
      pageSize:9999,
      pageNumber:1
    }
    this.baseService.postItem(Controllers.User,Actions.GetList,request).subscribe(res=>{
      this.merchants=res.entities;
    });
     this.baseService.postItem(Controllers.User,Actions.GetList,request2).subscribe(res=>{
      this.drivers=res.entities;
    });
  }
  
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  onDriverSelected() {
    if(this.dialogType==1){
      this.dialogRef.close(this.endUserPhoneNumber);
    }
    if(this.dialogType==2){
      this.dialogRef.close(this.clientId);
    }
    if(this.dialogType==3){
      this.dialogRef.close(this.driverId);
    }
  }

}
