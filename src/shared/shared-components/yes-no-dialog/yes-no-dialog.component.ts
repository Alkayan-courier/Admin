import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LanguageService } from '../../../shared/services/language.service';

export interface DialogData {
    title: string;
    content: string;
}
@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss']
})
export class YesNoDialogComponent  {


    constructor(public dialogRef: MatDialogRef<YesNoDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData,public languageService:LanguageService) {

    }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
