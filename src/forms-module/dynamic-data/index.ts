import { ActionTypeEnum, FieldTypeEnum } from '../../shared/enums/enums';
import { DynamicFormInput } from '../../shared/models/dynamic-form-input';
import { DynamicListColumn } from '../../shared/models/dynamic-list.model';

export const UserCreateForm: DynamicFormInput = {
  actions: [
    {
      actionName: 'Add',
      actionType: ActionTypeEnum.Submit,
      isDisableAllowed: false,
    },
  ],
  formFields: [
    {
      fieldId: 'fullName',
      fieldType: FieldTypeEnum.Input,
      label: 'FullName',
      fieldOrder: 1,
      placeholder: 'FullName',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'email',
      fieldType: FieldTypeEnum.Email,
      label: 'Email',
      fieldOrder: 1,
      placeholder: 'Email',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'phoneNumber',
      fieldType: FieldTypeEnum.Input,
      label: 'PhoneNumber',
      fieldOrder: 1,
      placeholder: 'PhoneNumber',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'address',
      fieldType: FieldTypeEnum.Input,
      label: 'Address',
      fieldOrder: 1,
      placeholder: 'Address',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'password',
      fieldType: FieldTypeEnum.Input,
      label: 'Password',
      fieldOrder: 1,
      placeholder: 'Password',
      options: { disabled: false, required: true, size: 3 },
    },
  ],
};

export const OrderSearchForm: DynamicFormInput = {
  actions: [
    {
      actionName: 'search',
      actionType: ActionTypeEnum.Submit,
      isDisableAllowed: false,
    },
    {
      actionName: 'Reset',
      actionType: ActionTypeEnum.Reset,
      isDisableAllowed: false,
    },
  ],
  formFields: [
    {
      fieldId: 'areaId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'area',
      fieldOrder: 1,
      placeholder: 'area',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'clientId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'client',
      fieldOrder: 2,
      placeholder: 'client',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'driverId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'driver',
      fieldOrder: 3,
      placeholder: 'driver',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'orderStatusId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'orderStatus',
      fieldOrder: 4,
      placeholder: 'orderStatus',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'clientBrandId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'clientBrand',
      fieldOrder: 5,
      placeholder: 'clientBrand',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'fromDate',
      fieldType: FieldTypeEnum.Date,
      label: 'fromDate',
      fieldOrder: 6,
      placeholder: 'fromDate',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'toDate',
      fieldType: FieldTypeEnum.Date,
      label: 'toDate',
      fieldOrder: 7,
      placeholder: 'toDate',
      options: { disabled: false, required: true, size: 3 },
    },
  ],
};

export const UserSearchForm: DynamicFormInput = {
  actions: [
    {
      actionName: 'search',
      actionType: ActionTypeEnum.Submit,
      isDisableAllowed: false,
    },
    {
      actionName: 'Reset',
      actionType: ActionTypeEnum.Reset,
      isDisableAllowed: false,
    },
  ],
  formFields: [
    {
      fieldId: 'searchValue',
      fieldType: FieldTypeEnum.Input,
      label: 'searchValue',
      fieldOrder: 1,
      placeholder: 'searchValue',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'userId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'userId',
      fieldOrder: 1,
      placeholder: 'userId',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'isActive',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'isActive',
      fieldOrder: 1,
      placeholder: 'isActive',
      options: { disabled: false, required: true, size: 3 },
    },
  ],
};

export const OrderList: DynamicListColumn[] = [
  {
    columnId: 'merchantName',
    columnValue: 'merchantName',
    columnName: 'merchantName',
    actions: [],
  },
  {
    columnId: 'clientBrand',
    columnValue: 'clientBrand',
    columnName: 'clientBrand',
    actions: [],
  },
  {
    columnId: 'createdBy',
    columnValue: 'createdBy',
    columnName: 'createdBy',
    actions: [],
  },
  {
    columnId: 'endUserName',
    columnValue: 'endUserName',
    columnName: 'endUserName',
    actions: [],
  },
  {
    columnId: 'endUserAddress',
    columnValue: 'endUserAddress',
    columnName: 'endUserAddress',
    actions: [],
  },
  {
    columnId: 'orderStatusNameEn',
    columnValue: 'orderStatusNameEn',
    columnName: 'orderStatusNameEn',
    actions: [],
  },
  {
    columnId: 'orderTotalPrice',
    columnValue: 'orderTotalPrice',
    columnName: 'orderTotalPrice',
    actions: [],
  },
  {
    columnId: 'orderDate',
    columnValue: 'orderDate',
    columnName: 'orderDate',
    actions: [],
  },
  {
    columnId: 'areaName',
    columnValue: 'areaName',
    columnName: 'areaName',
    actions: [],
  },
  {
    columnId: 'driverName',
    columnValue: 'driverName',
    columnName: 'driverName',
    actions: [],
  },
];

export const UsersList: DynamicListColumn[] = [
  {
    columnId: 'phoneNumber',
    columnValue: 'phoneNumber',
    columnName: 'phoneNumber',
    actions: [],
  },
  {
    columnId: 'fullName',
    columnValue: 'fullName',
    columnName: 'fullName',
    actions: [],
  },
  {
    columnId: 'email',
    columnValue: 'email',
    columnName: 'email',
    actions: [],
  },
  {
    columnId: 'statusEn',
    columnValue: 'statusEn',
    columnName: 'statusEn',
    actions: [],
  },
  {
    columnId: 'actions',
    columnValue: 'actions',
    columnName: 'actions',
    actions: [
      { actionName: 'view', actionType: 3 },
      { actionName: 'delete', actionType: 2 },
      { actionName: 'edit', actionType: 1 },
      { actionName: 'activate', actionType: 4 },
    ],
  },
];

export const UpdateUserForm: DynamicFormInput = {
  actions: [
    {
      actionName: 'Edit',
      actionType: ActionTypeEnum.Submit,
      isDisableAllowed: false,
    },
  ],
  formFields: [
    {
      fieldId: 'fullName',
      fieldType: FieldTypeEnum.Input,
      label: 'FullName',
      fieldOrder: 1,
      placeholder: 'FullName',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'email',
      fieldType: FieldTypeEnum.Email,
      label: 'Email',
      fieldOrder: 1,
      placeholder: 'Email',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'phoneNumber',
      fieldType: FieldTypeEnum.Input,
      label: 'PhoneNumber',
      fieldOrder: 1,
      placeholder: 'PhoneNumber',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'address',
      fieldType: FieldTypeEnum.Input,
      label: 'Address',
      fieldOrder: 1,
      placeholder: 'Address',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'isActive',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'isActive',
      fieldOrder: 1,
      placeholder: 'isActive',
      options: { disabled: false, required: true, size: 3 },
    },
  ],
};

export const UpdateMerchantForm: DynamicFormInput = { ...UpdateUserForm };

UpdateMerchantForm.formFields = UpdateMerchantForm.formFields.concat([
  {
    fieldId: 'cardHolderName',
    fieldType: FieldTypeEnum.Input,
    label: 'cardHolderName',
    fieldOrder: 1,
    placeholder: 'cardHolderName',
    options: { disabled: false, required: true, size: 3 },
  },
  {
    fieldId: 'bankName',
    fieldType: FieldTypeEnum.Input,
    label: 'bankName',
    fieldOrder: 1,
    placeholder: 'bankName',
    options: { disabled: false, required: true, size: 3 },
  },
  {
    fieldId: 'iban',
    fieldType: FieldTypeEnum.Input,
    label: 'iban',
    fieldOrder: 1,
    placeholder: 'iban',
    options: { disabled: false, required: true, size: 3 },
  },
  {
    fieldId: 'accountNumber',
    fieldType: FieldTypeEnum.Number,
    label: 'accountNumber',
    fieldOrder: 1,
    placeholder: 'accountNumber',
    options: { disabled: false, required: true, size: 3 },
  },
  {
    fieldId: 'bankVerifecationAttachment',
    fieldType: FieldTypeEnum.File,
    label: 'bankVerifecationAttachment',
    fieldOrder: 1,
    placeholder: 'bankVerifecationAttachment',
    options: { disabled: false, required: true, size: 3 },
  },
]);

export const OrderForm: DynamicFormInput = {
  actions: [
    {
      actionName: 'Create',
      actionType: ActionTypeEnum.Submit,
      isDisableAllowed: true,
    },
  ],
  formFields: [
    {
      fieldId: 'areaId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'areaId',
      fieldOrder: 1,
      placeholder: 'areaId',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'clientId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'clientId',
      fieldOrder: 1,
      placeholder: 'clientId',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'orderStatusId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'orderStatusId',
      fieldOrder: 1,
      placeholder: 'orderStatusId',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'orderTaskId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'orderTaskId',
      fieldOrder: 1,
      placeholder: 'orderTaskId',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'deliveryFeesOn',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'deliveryFeesOn',
      fieldOrder: 1,
      placeholder: 'deliveryFeesOn',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'endUserAddress',
      fieldType: FieldTypeEnum.Input,
      label: 'endUserAddress',
      fieldOrder: 1,
      placeholder: 'endUserAddress',
      options: { disabled: false, required: false, size: 3 },
    },
    {
      fieldId: 'orderItemTypeDescription',
      fieldType: FieldTypeEnum.Input,
      label: 'orderItemTypeDescription',
      fieldOrder: 1,
      placeholder: 'orderItemTypeDescription',
      options: { disabled: false, required: false, size: 3 },
    },
    {
      fieldId: 'orderPrice',
      fieldType: FieldTypeEnum.Number,
      label: 'orderPrice',
      fieldOrder: 1,
      placeholder: 'orderPrice',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'addedPrice',
      fieldType: FieldTypeEnum.Number,
      label: 'addedPrice',
      fieldOrder: 1,
      placeholder: 'addedPrice',
      options: { disabled: false, required: false, size: 3 },
    },
    {
      fieldId: 'endUserPhoneNumber',
      fieldType: FieldTypeEnum.Input,
      label: 'endUserPhoneNumber',
      fieldOrder: 1,
      placeholder: 'endUserPhoneNumber',
      options: {
        disabled: false,
        required: false,
        phoneNumberValidation: true,
        size: 3,
      },
    },
    {
      fieldId: 'endUserName',
      fieldType: FieldTypeEnum.Input,
      label: 'endUserName',
      fieldOrder: 1,
      placeholder: 'endUserName',
      options: { disabled: false, required: false, size: 3 },
    },
  ],
};
