import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActionTypeEnum, FieldTypeEnum } from '../../../shared/enums/enums';
import { DynamicFormInput } from '../../../shared/models/dynamic-form-input';
import { DynamicFormOutput } from '../../../shared/models/dynamic-form-output.model';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { IconPickerDialogComponent } from '../icon-picker-dialog/icon-picker-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LanguageService } from '../../../shared/services/language.service';
import { DynamicFormField } from '../../../shared/models/dynamic-form-field';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit, AfterViewInit {
  @Input() formInput = new DynamicFormInput();
  @ViewChild('myFileInput') myFileInput;
  @Input() isUpdate = false;
  @Input() isList = false;
  public fields;
  public selectedMatAutoComleteFieldId: string;
  public renderedMatAutoComleteFieldId: string[] = [];
  @Output() actionSubmitted: EventEmitter<DynamicFormOutput> =
    new EventEmitter<DynamicFormOutput>();
  public filteredOptions: Observable<any[]>[];
  public autoCompleteControls: FormGroup = new FormGroup({});
  public dynamicFormGroup: FormGroup = new FormGroup({});
  public wrapper: any[] = [];
  public selectedFile;
  public filesWrapper: any[] = [];
  public filteredOptionsWrapper = [];
  public iconName = 'access_time';
  public get filedTypeEnum(): typeof FieldTypeEnum {
    return FieldTypeEnum;
  }
  public get actionTypeEnum(): typeof ActionTypeEnum {
    return ActionTypeEnum;
  }
  constructor(
    private _location: Location,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    public languageService: LanguageService,
    public router: LanguageService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.dynamicFormGroup = this.formBuilder.group({});

    this.formInput.formFields.forEach((field) => {
      const validators = this.fetchFieldValidations(field);
      const control = this.formBuilder.control(field.value, validators);
      this.dynamicFormGroup.addControl(field.fieldId, control);
    });
  }

  ngAfterViewInit(): void {}

  public displayFn(fieldId, data) {
    if (fieldId) {
      let fieldData = this.formInput.formFields.find(
        (x) => x.fieldId == fieldId
      );
      let selectedOption = fieldData.data.find((x) => x.value == data);
      return selectedOption &&
        (selectedOption.viewValueEn || selectedOption.viewValueAr)
        ? this.languageService.getCurrentLanguage() == 'ar'
          ? selectedOption.viewValueAr
          : selectedOption.viewValueEn
        : '';
    }
    return '';
  }
  public fetchFieldValidations(field: DynamicFormField): ValidatorFn[] {
    let validators = [];
    if (field.options.required && field.options.phoneNumberValidation) {
      validators.push(Validators.required);
      validators.push(RegexValidator(RegexConstants.uaeNumber));
    } else if (field.options.required && !field.options.phoneNumberValidation) {
      validators.push(Validators.required);
    } else if (!field.options.required && field.options.phoneNumberValidation) {
      validators.push(RegexValidator(RegexConstants.uaeNumber));
    } else {
    }
    if (field.fieldType == FieldTypeEnum.Email) {
      validators.push(Validators.email);
    }
    return validators;
  }
  public getDynamicFormControl(filedId: string) {
    return this.autoCompleteControls.get(filedId) as FormControl;
  }
  private filterOptions(value: any, data: any[]): any[] {
    const filterValue = value.toLowerCase();
    return data.filter(
      (option) =>
        option.viewValueEn.toLowerCase().includes(filterValue) ||
        option.viewValueAr.toLowerCase().includes(filterValue)
    );
  }

  public autoCompleteListSelected(event, fieldId: string) {
    this.selectedMatAutoComleteFieldId = fieldId;
    var autoCompleteField = this.formInput.formFields.find(
      (x) => x.fieldId == fieldId
    );
    const control = autoCompleteField.data.find(
      (x) => x.value === event.option.value
    );
    this.dynamicFormGroup.get(fieldId).setValue(control.value);
    this.dynamicFormGroup.updateValueAndValidity();
  }
  public checkBoxValueChanged(event, fieldId: string) {
    this.getFormControlByName(fieldId).setValue(event.checked);
  }
  public radioButtonValueChanged(event, fieldId: string) {
    this.getFormControlByName(fieldId).setValue(event.value);
  }
  public getFormControlByName(controlName: string): FormControl {
    return this.dynamicFormGroup.get(controlName) as FormControl;
  }
  public fileUploaderChanged(event, fieldId: string) {
    this.selectedFile = event.target.files[0];
    this.filesWrapper[fieldId] = this.selectedFile.name;
    this.dynamicFormGroup.controls[fieldId].setValue(this.selectedFile);
    this.selectedFile = undefined;
  }
  public openUploader(fieldId: string) {
    let input = document.getElementById(fieldId);
    input.click();
  }
  public pushToFocusedFields(fieldId: string) {
    this.selectedMatAutoComleteFieldId = fieldId;
  }
  public resetForm(form: NgForm, actionType) {
    form.resetForm();
    let output = new DynamicFormOutput();
    output.data = this.dynamicFormGroup.value;
    output.action = actionType;
    this.selectedFile = null;
    this.filesWrapper = [];
    if (!this.isList && this.myFileInput) {
      this.myFileInput.nativeElement.value = '';
    }
    if (this.isList) {
      this.spinner.show();
      this.actionSubmitted.emit(output);
    }
  }
  public submitAction(actionType: ActionTypeEnum, form: any) {
    this.filesWrapper = [];
    let output = new DynamicFormOutput();
    switch (actionType) {
      case ActionTypeEnum.Submit: {
        this.spinner.show();
        output.data = this.dynamicFormGroup.value;
        output.action = actionType;
        this.actionSubmitted.emit(output);
        if (!this.isUpdate) {
          //this.resetForm(form,actionType);
        }
        break;
      }
      case ActionTypeEnum.Reset: {
        this.resetForm(form, actionType);
        break;
      }
      case ActionTypeEnum.Back: {
        this._location.back();
        break;
      }
      case ActionTypeEnum.ReactivateAll: {
        output = null;
        this.actionSubmitted.emit(output);
        break;
      }
      default:
        break;
    }
  }
  public openIconPickerDialog(fieldId: string) {
    const dialogRef = this.dialog.open(IconPickerDialogComponent, {
      width: '600px',
      data: {
        title: 'chooseYourIcon',
        content: 'confirmDeleteMessage',
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.getFormControlByName(fieldId).setValue(res);
        this.iconName = res;
      }
    });
  }
}

export class RegexConstants {
  public static uaeNumber = environment.phoneNumberRegex;
}

export function RegexValidator(reg: RegexConstants): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && !control.value.toString().match(reg)) {
      return { decimal: true };
    }
    return null;
  };
}
