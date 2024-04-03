import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LanguageService } from '../../shared/services/language.service';
import { Controllers, Actions } from '../../shared/global-variables/api-config';
import { BaseService } from '../../shared/services/base.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-push-notifications',
  templateUrl: './push-notifications.component.html',
  styleUrls: ['./push-notifications.component.scss']
})
export class PushNotificationsComponent implements OnInit {
  public user = new FormControl();
  public filteredUsers: Observable<any[]>;
  public usersList: any[];
  public rolesList: any[];
  public mappedUser: any[];
  public usersToSendList: any[];
  public selectedUser: number;
  public tergetedAudience = 1;
  public usersDropList = new FormControl();

  public pushNotificationForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    body: new FormControl('',[Validators.required]),
    userId: new FormControl(''),
    usersIds: new FormControl(''),
    role: new FormControl('')
  });

  public getFormControlByName(controlName: string): FormControl {
    return this.pushNotificationForm.get(controlName) as FormControl;
  }

  constructor(
    private baseService: BaseService,
    public spinner: NgxSpinnerService,
    public notification: NotificationService,
    public translate: TranslateService,
    public languageService: LanguageService,
  ) { }

  public ngOnInit(): void {
    this.getAllUsers();
    this.getAllRoles();
  }


  public getAllUsers(): void {
    this.spinner.show();
    const Controller = Controllers.User;
    this.baseService.getAllForList(Controller).subscribe(res => {
      this.usersList = res;
     // this.mappedUser = res.map(user => ({ display: user.fullName, value: user.id }))
      this.filteredUsers = this.user.valueChanges
        .pipe(
          startWith(''),
          map(value => this.filter(value))
        );
      this.spinner.hide();
    });
  }
  public getAllRoles(): void {
    this.spinner.show();
    const Controller = Controllers.User;
    this.baseService.getItems(Controller,Actions.GetNonEmployeeRoles).subscribe(res => {
      this.rolesList = res;
      this.spinner.hide();
    });
  }
  public userSelectionChange(value) {
    console.log(value);

    this.usersToSendList = value;
    this.getFormControlByName('usersIds').setValue(value);
  }
  private filter(value: any) {
    const filterValue = value.toLowerCase();
    return this.usersList.filter(option => option.fullName.toLowerCase().includes(filterValue));
  }
  userSelected(event) {
    this.selectedUser = this.usersList.find(x => x.fullName == event.option.value).id;
    this.getFormControlByName('userId').setValue(this.selectedUser);
  }

 public submitMultiUserNotification(): void {
    if (this.pushNotificationForm.invalid) {
      this.pushNotificationForm.markAllAsTouched();
      this.notification.showNotification(this.translate.instant('formValidationError'), 'warn');
    }
    else {
      this.spinner.show();
      const notificationForm = this.pushNotificationForm.value;
      this.baseService
        .postItemTextReponse(Controllers.Notification, Actions.SendNotificationToMultiUsers , notificationForm)
        .subscribe(response => {
          this.spinner.hide();
          this.notification.showNotification(response, 'success');
        },  error => {
          if (error.status === 400) {
            this.notification.showNotification(error.error, 'danger');
          }
          else {
            this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
          }
          this.spinner.hide();
        });
    }
  }

  public submitAllUsersNotifications(): void {
    if (this.pushNotificationForm.invalid) {
      this.pushNotificationForm.markAllAsTouched();
      this.notification.showNotification(this.translate.instant('formValidationError'), 'warn');
    }
    else {
      this.spinner.show();
      const notificationForm = this.pushNotificationForm.value;
      this.baseService
        .postItemTextReponse(Controllers.Notification, Actions.PodcastAllUsersNotification, notificationForm)
        .subscribe(response => {
          this.spinner.hide();
          this.notification.showNotification(response, 'success');
        }, error => {
          if (error.status === 400) {
            this.notification.showNotification(error.error, 'danger');
          }
          else {
            this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
          }
          this.spinner.hide();
        });
    }
  }
  public submitSpecificRoleNotifications(): void {
    if (this.pushNotificationForm.invalid) {
      this.pushNotificationForm.markAllAsTouched();
      this.notification.showNotification(this.translate.instant('formValidationError'), 'warn');
    }
    else {
      this.spinner.show();
      const notificationForm = this.pushNotificationForm.value;
      this.baseService
        .postItemTextReponse(Controllers.Notification, Actions.SendPushNotificationByRole, notificationForm)
        .subscribe(response => {
          this.spinner.hide();
          this.notification.showNotification(response, 'success');
        }, error => {
          if (error.status === 400) {
            this.notification.showNotification(error.error, 'danger');
          }
          else {
            this.notification.showNotification(this.translate.instant('somethingWentWrong'), 'danger');
          }
          this.spinner.hide();
        });
    }
  }
}
