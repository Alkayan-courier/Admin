import { FieldTypeEnum } from "../enums/enums";

export class DynamicFormField {
  fieldId: string;
  fieldType: FieldTypeEnum;
  label: string;
  value?: any;
  data?: FieldListData[];
  placeholder: string;
  options:DynamicFormFieldOption;
  onChange?:any;
  fieldOrder:number
}

export class DynamicFormFieldOption {
  disabled: boolean;
  required: boolean;
  phoneNumberValidation?: boolean;
  size: number;
}
export class FieldListData {
  value: number;
  viewValueEn: string;
  viewValueAr: string;
}
export class UserResponseModel {
  id: number;
  fullNameEn: string;
  fullNameAr: string;
}








