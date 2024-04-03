import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';
declare var $: any;

const configurations = {
  type: 'success',
  title: 'This is just a title',
  content: 'This is just some content',
  timeOut: 3000,
  showProgressBar: true,
  pauseOnHover: true,
  clickToClose: true,
  animate: 'fromRight'
};
const types = ['alert', 'error', 'info', 'warn', 'success'];
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private languageService: LanguageService,private translate:TranslateService) {

  }

  showNotification(message: string, type: string): void {

    //const color = Math.floor((Math.random() * 4) + 1);
    var direction = this.languageService.getCurrentLanguage() == 'en' ? "ltr" : "rtl";
    $.notify({
      icon: "notifications",
      message: message

    }, {
      type: type,
      timer: 2000,
      placement: {
        from: 'bottom',
        align: this.languageService.getCurrentLanguage() == 'en' ? 'right' : 'left'
      },
      template: '<div data-notify="container" dir=' + direction + ' class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">'+this.translate.instant(message)+'</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
  showOriginalNotification(message: string, type: string): void {

    //const color = Math.floor((Math.random() * 4) + 1);
    var direction = this.languageService.getCurrentLanguage() == 'en' ? "ltr" : "rtl";
    $.notify({
      icon: "notifications",
      message: message

    }, {
      type: type,
      timer: 2000,
      placement: {
        from: 'bottom',
        align: this.languageService.getCurrentLanguage() == 'en' ? 'right' : 'left'
      },
      template: '<div data-notify="container" dir=' + direction + ' class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">'+message+'</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }


}
