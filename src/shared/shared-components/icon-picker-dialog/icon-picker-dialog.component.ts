import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { material_icons } from '../../../shared/global-variables/lookups';
import { LanguageService } from '../../../shared/services/language.service';

export interface DialogData {
  title: string;
  content: string;
}
@Component({
  selector: 'app-icon-picker-dialog',
  templateUrl: './icon-picker-dialog.component.html',
  styleUrls: ['./icon-picker-dialog.component.scss']
}) 
export class IconPickerDialogComponent {
  public searchValue: string;
  public icons = material_icons;
  constructor(public dialogRef: MatDialogRef<IconPickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public languageService: LanguageService) {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onPickerSelected(icon: string) {
    this.dialogRef.close(icon);
  }
  public clearSearchText() {
    this.searchValue = '';
  }
  public search(event) {
    console.log(event);
    this.icons=this.icons.filter(function (value) {
      return value.toLowerCase().indexOf(event.toLowerCase()) >= 0;
    });
  }
}
