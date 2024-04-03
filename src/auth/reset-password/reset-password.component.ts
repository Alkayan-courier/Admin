import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actions, Controllers } from '../../shared/global-variables/api-config';
import { BaseService } from '../../shared/services/base.service';
import { LanguageService } from '../../shared/services/language.service';
import { NotificationService } from '../../shared/services/notification.service';
export enum resetPasswordSteps {
  enterEmail = 1,
  enterConfirmationCode = 2,
  updatePassword = 3
}
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {

  currentStep: number = resetPasswordSteps.enterEmail;
  public isMatch: boolean = false
  keyNumber: number;
  public phoneNumber: string;
  emailValue: string = "";
  mobileNumberValue: string = "";
  public resendCounter;
  codeNumbersArr = [
    { id: "1", value: "" },
    { id: "2", value: "" },
    { id: "3", value: "" },
    { id: "4", value: "" }
  ]

  hidePassword = true;
  hideConfirmPassword = true;

  updatePasswordForm: FormGroup

  public forgetPasswordForm = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required, RegexValidator(RegexConstants.uaeNumber)]),
    language: new FormControl(),
  })

  constructor(private formBuilder: FormBuilder,
    private baseService: BaseService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private spinner: NgxSpinnerService,
    private notification: NotificationService,
    private languageService: LanguageService,
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.keyNumber = 962;
    this.forgetPasswordForm.controls['language'].setValue(this.languageService.getCurrentLanguage());
    this.updatePasswordForm = this.formBuilder.group({
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required]),
      token: new FormControl(),
      emailAddress: new FormControl(),
      userId: new FormControl(),
    })
    if (this.activatedRoute.snapshot.queryParams['uemail']) {
      this.activatedRoute.params.subscribe(param => {
        if (param != null) {
          this.updatePasswordForm.get('emailAddress').setValue(this.activatedRoute.snapshot.queryParams['uemail'])
          this.updatePasswordForm.get('token').setValue(this.activatedRoute.snapshot.queryParams['token'])
          this.currentStep = resetPasswordSteps.updatePassword
        }
      })
    }
  }



  checkPassword() {
    const password = this.updatePasswordForm.get('password').value
    const confirmPassword = this.updatePasswordForm.get('confirmPassword').value

    if (password == confirmPassword) {
      this.isMatch = true
      return this.isMatch
    } else {
      this.isMatch = false
      return this.isMatch
    }
  }

  setEmailValue(value) {
    this.emailValue = value;
  }

  setMobileNumberValue(value) {
    this.mobileNumberValue = value;
  }

  onResetClick() {
    console.log('Rest');
    this.spinner.show()
    if (!this.forgetPasswordForm.invalid) {
      let form = {
        username: this.forgetPasswordForm.get('phoneNumber').value
      };
      this.baseService.postItemTextReponse(Controllers.Auth, Actions.ForgetPassword + '?username=' + this.forgetPasswordForm.get('phoneNumber').value + '&isWeb=' + true, {}).subscribe(res => {
        this.spinner.hide();
        this.currentStep = resetPasswordSteps.enterConfirmationCode;
        this.resendCounter = 30;

         var intervalId=setInterval( () =>{
          this.resendCounter--;
          if(this.resendCounter==0){
            clearInterval(intervalId); // Will clear the timer.
          }
        }, 1000);

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

  validateCodeNumber(event) {
    if (event.target.value) {
      let value: string = event.target.value.toString().slice(-1);
      (<HTMLInputElement>document.getElementById(event.target.id)).value = value;
      this.codeNumbersArr.find(x => x.id == event.target.id).value = value;

      if (event.target.id < 4)
        document.getElementById((parseInt(event.target.id) + 1).toString()).focus()

      var isCompleted = true;
      for (let item of this.codeNumbersArr) {
        if (item.value == "") {
          isCompleted = false;
          break
        }
      }
      console.log(isCompleted);

      if (isCompleted) {
        this.spinner.show();
        var code = ''
        for (let item of this.codeNumbersArr) {
          code += item.value;
        }
        const req = {
          phoneNumber: this.forgetPasswordForm.get('phoneNumber').value,
          otpCode: code
        }
        this.baseService.postItemTextReponse(Controllers.Auth, Actions.ValidateOtp + '?isWeb=' + true, req).subscribe(res => {
          this.currentStep = resetPasswordSteps.updatePassword;
          this.updatePasswordForm.controls['userId'].setValue(res);
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

    } else {
      (<HTMLInputElement>document.getElementById(event.target.id)).value = ""
      this.codeNumbersArr.find(x => x.id == event.target.id).value = "";
    }
  }

  backToEmail() {
    this.resetConfirmationCodeEntry();
    this.currentStep = resetPasswordSteps.enterEmail;
  }

  resetConfirmationCodeEntry() {
    this.codeNumbersArr = [
      { id: "1", value: "" },
      { id: "2", value: "" },
      { id: "3", value: "" },
      { id: "4", value: "" },
      { id: "5", value: "" },
      { id: "6", value: "" },
    ]

    for (var i = 1; i <= 4; i++) {
      (<HTMLInputElement>document.getElementById(i.toString())).value = ""
    }
  }


  onUpdatePassword() {
    if (this.checkPassword()) {
      this.spinner.show()
      const form = {
        phoneNumber: this.forgetPasswordForm.get('phoneNumber').value,
        password: this.updatePasswordForm.get('password').value,
        confirmPassword: this.updatePasswordForm.get('confirmPassword').value,
      }
      this.baseService.postItemTextReponse(Controllers.Auth, Actions.ResetPassword + '?isWeb=' + true, form).subscribe(res => {
        this.spinner.hide()
        this.route.navigate(['/auth/login'])
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
    else {
      this.notification.showNotification(this.translate.currentLang == 'en' ? "password dosent\'t match confirm password" : 'تأكيد كلمة المرور لا يطابق كلمة المرور', "danger");
    }


  }
}
export class RegexConstants {
  public static uaeNumber = /^(?:04|05|50|51|52|55|56|2|3|4|6|7|9)\d{7}$/;
}

export function RegexValidator(reg: RegexConstants): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && !control.value.toString().match(reg)) {
      return { decimal: true };
    }
    return null;
  };
}