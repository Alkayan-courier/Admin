import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LanguageService } from '../../../shared/services/language.service';
import { FieldListData } from '../../../shared/models/dynamic-form-field';
import { BaseService } from '../../../shared/services/base.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { YesNoDialogComponent } from '../yes-no-dialog/yes-no-dialog.component';
import { Controllers } from '../../../shared/global-variables/api-config';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  public pageSize = 10;
  public pageNumber = 1;
  public totalCount: number;
  public roleId: number;
  public roles: FieldListData[] = [];
  @Input() public userId: number;

  public displayedColumns: string[] = [
    'roleName',
    'roleId',
    'actions'
  ];
  public dataSource: MatTableDataSource<any>;
  constructor(
    private baseService: BaseService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService,
    private dialog: MatDialog,
    public languageService: LanguageService,
    private notification: NotificationService

  ) {
  }
  ngOnInit() {
    this.spinner.show();
    this.getRoles();
    this.getUserRoles();
  }
  getUserRoles() {

    this.baseService.getUserRoles(this.userId).subscribe(res => {
      this.dataSource = new MatTableDataSource<Element>(res);
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
  public getRoles() {
    this.baseService.getRoles().subscribe(res => {
      this.roles = res;
    });
  }
  public openDeleteDialog(roleId) {
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
        let request = {
          RoleId: roleId,
          UserId: Number(this.userId)
        }
        this.baseService.removeUserRole(request).subscribe(res => {
          this.getUserRoles();
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
  }
public addUserRole(){
  this.spinner.show();
  let request = {
    RoleId: Number(this.roleId),
    UserId: Number(this.userId)
  }
  this.baseService.postItemTextReponse(Controllers.User,'AddUserRole',request).subscribe(res => {
    this.getUserRoles();
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
}
