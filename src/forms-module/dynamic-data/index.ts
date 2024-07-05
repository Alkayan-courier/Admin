import {
  FormAction,
  ListAction,
} from '../../shared/models/dynamic-action.model';
import {
  ActionTypeEnum,
  FieldTypeEnum,
  ListActionTypeEnum,
} from '../../shared/enums/enums';
import { DynamicFormInput } from '../../shared/models/dynamic-form-input';
import { DynamicListColumn } from '../../shared/models/dynamic-list.model';

const searchAction: FormAction = {
  actionName: 'search',
  actionType: ActionTypeEnum.Submit,
  isDisableAllowed: false,
};

const resetAction: FormAction = {
  actionName: 'Reset',
  actionType: ActionTypeEnum.Reset,
  isDisableAllowed: false,
};

const addAction: FormAction = {
  actionName: 'Add',
  actionType: ActionTypeEnum.Submit,
  isDisableAllowed: true,
};

const editAction: FormAction = {
  actionName: 'Edit',
  actionType: ActionTypeEnum.Submit,
  isDisableAllowed: true,
};
export const UserCreateForm: DynamicFormInput = {
  actions: [addAction],
  formFields: [
    {
      fieldId: 'fullName',
      fieldType: FieldTypeEnum.Input,
      label: 'Name',
      fieldOrder: 1,
      placeholder: 'Name',
      options: { disabled: false, required: true, size: 4 },
    },
    {
      fieldId: 'email',
      fieldType: FieldTypeEnum.Email,
      label: 'Email',
      fieldOrder: 1,
      placeholder: 'Email',
      options: { disabled: false, required: true, size: 4 },
    },
    {
      fieldId: 'phoneNumber',
      fieldType: FieldTypeEnum.Input,
      label: 'Number',
      fieldOrder: 1,
      placeholder: 'Number',
      options: {
        disabled: false,
        required: true,
        size: 4,
        phoneNumberValidation: true,
      },
    },
    // {
    //   fieldId: 'areaRegionId',
    //   fieldType: FieldTypeEnum.DropDownList,
    //   label: 'Region',
    //   fieldOrder: 1,
    //   placeholder: 'Region',
    //   options: { disabled: false, required: true, size: 4 },
    // },
    {
      fieldId: 'address',
      fieldType: FieldTypeEnum.Input,
      label: 'Address',
      fieldOrder: 1,
      placeholder: 'Address',
      options: { disabled: false, required: true, size: 4 },
    },
    {
      fieldId: 'password',
      fieldType: FieldTypeEnum.Input,
      label: 'Password',
      fieldOrder: 1,
      placeholder: 'Password',
      options: { disabled: false, required: true, size: 4 },
    },
  ],
};

export const OrderSearchForm: DynamicFormInput = {
  actions: [searchAction, resetAction],
  formFields: [
    {
      fieldId: 'areaId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'area',
      fieldOrder: 1,
      placeholder: 'area',
      options: { disabled: false, required: false, size: 3 },
    },
    {
      fieldId: 'clientId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'client',
      fieldOrder: 2,
      placeholder: 'client',
      options: { disabled: false, required: false, size: 3 },
    },
    {
      fieldId: 'driverId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'driver',
      fieldOrder: 3,
      placeholder: 'driver',
      options: { disabled: false, required: false, size: 3 },
    },
    {
      fieldId: 'orderStatusId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'orderStatus',
      fieldOrder: 4,
      placeholder: 'orderStatus',
      options: { disabled: false, required: false, size: 3 },
    },
    {
      fieldId: 'clientBrandId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'clientBrand',
      fieldOrder: 5,
      placeholder: 'clientBrand',
      options: { disabled: false, required: false, size: 3 },
    },
    {
      fieldId: 'fromDate',
      fieldType: FieldTypeEnum.Date,
      label: 'fromDate',
      fieldOrder: 6,
      placeholder: 'fromDate',
      options: { disabled: false, required: false, size: 3 },
    },
    {
      fieldId: 'toDate',
      fieldType: FieldTypeEnum.Date,
      label: 'toDate',
      fieldOrder: 7,
      placeholder: 'toDate',
      options: { disabled: false, required: false, size: 3 },
    },
  ],
};

export const UserSearchForm: DynamicFormInput = {
  actions: [searchAction, resetAction],
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
  {
    columnId: 'actions',
    columnValue: 'actions',
    columnName: 'actions',
    actions: [{ actionName: 'view', actionType: ListActionTypeEnum.View }],
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
      // { actionName: 'activate', actionType: 4 },
    ],
  },
];

export const UpdateUserForm: DynamicFormInput = {
  actions: [editAction],
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
    // {
    //   fieldId: 'areaRegionId',
    //   fieldType: FieldTypeEnum.DropDownList,
    //   label: 'Region',
    //   fieldOrder: 1,
    //   placeholder: 'Region',
    //   options: { disabled: false, required: true, size: 3 },
    // },
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
  actions: [addAction],
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
      fieldOrder: 1,
      placeholder: 'client',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'orderStatusId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'orderStatus',
      fieldOrder: 1,
      placeholder: 'orderStatus',
      options: { disabled: false, required: true, size: 3 },
    },
    {
      fieldId: 'orderTaskId',
      fieldType: FieldTypeEnum.DropDownList,
      label: 'orderTask',
      fieldOrder: 1,
      placeholder: 'orderTask',
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
      options: { disabled: false, required: true, size: 3 },
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

export const OrderUpdateForm: DynamicFormInput = {
  actions: [editAction],
  formFields: OrderForm.formFields,
};

export const PostponedOrdersSearchForm: DynamicFormInput = {
  actions: OrderSearchForm.actions,
  formFields: [...OrderSearchForm.formFields],
};

export const EmployeeCreateForm: DynamicFormInput = {
  actions: [...UserCreateForm.actions],
  formFields: [
    ...UserCreateForm.formFields,
    {
      fieldId: 'role',
      fieldOrder: 10,
      fieldType: FieldTypeEnum.DropDownList,
      label: 'role',
      placeholder: 'role',
      options: { required: true, disabled: false, size: 4 },
    },
  ],
};

export const EmployeeUpdateForm: DynamicFormInput = {
  actions: [editAction],
  formFields: [
    ...EmployeeCreateForm.formFields.filter(
      (field) => field.fieldId !== 'role'
    ),
    {
      fieldId: 'isActive',
      fieldOrder: 7,
      fieldType: FieldTypeEnum.DropDownList,
      placeholder: 'isActive',
      label: 'isActive',
      options: { required: true, disabled: false, size: 4 },
    },
  ],
};

export const RecordSearchForm: DynamicFormInput = {
  actions: [searchAction, resetAction],
  formFields: [
    {
      fieldId: 'areaGroupId',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.DropDownList,
      label: 'areaGroup',
      placeholder: 'areaGroup',
      options: { required: false, disabled: false, size: 4 },
    },
  ],
};

export const RecordList: DynamicListColumn[] = [
  {
    columnId: 'areaGroupNameEn',
    columnName: 'areaGroupNameEn',
    columnValue: 'areaGroupNameEn',
    actions: [],
  },
  {
    columnId: 'areaGroupNameAr',
    columnName: 'areaGroupNameAr',
    columnValue: 'areaGroupNameAr',
    actions: [],
  },
  {
    columnId: 'createdBy',
    columnName: 'createdBy',
    columnValue: 'createdBy',
    actions: [],
  },
  {
    columnId: 'driverName',
    columnName: 'driverName',
    columnValue: 'driverName',
    actions: [],
  },
  {
    columnId: 'recordDate',
    columnName: 'recordDate',
    columnValue: 'recordDate',
    actions: [],
  },
  {
    columnId: 'actions',
    columnName: 'actions',
    columnValue: 'actions',
    actions: [{ actionName: 'view', actionType: 3 }],
  },
];

export const FinancialRoundSearchForm: DynamicFormInput = {
  actions: [searchAction, resetAction],
  formFields: [
    {
      fieldId: 'clientId',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.DropDownList,
      label: 'client',
      placeholder: 'client',
      options: { required: false, disabled: false, size: 5 },
    },
    {
      fieldId: 'status',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.DropDownList,
      label: 'status',
      placeholder: 'status',
      options: { required: false, disabled: false, size: 5 },
    },
    {
      fieldId: 'fromDate',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Date,
      label: 'fromDate',
      placeholder: 'fromDate',
      options: { required: false, disabled: false, size: 5 },
    },
    {
      fieldId: 'toDate',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Date,
      label: 'toDate',
      placeholder: 'toDate',
      options: { required: false, disabled: false, size: 5 },
    },
  ],
};

export const FinancialRoundList: DynamicListColumn[] = [
  {
    columnId: 'clientName',
    columnName: 'clientName',
    columnValue: 'clientName',
    actions: [],
  },
  {
    columnId: 'status',
    columnName: 'status',
    columnValue: 'status',
    actions: [],
  },
  {
    columnId: 'roundDate',
    columnName: 'roundDate',
    columnValue: 'roundDate',
    actions: [],
  },
  {
    columnId: 'lastValidationDate',
    columnName: 'lastValidationDate',
    columnValue: 'lastValidationDate',
    actions: [],
  },
];

export const CitySearchForm: DynamicFormInput = {
  actions: [
    {
      actionName: 'search',
      actionType: ActionTypeEnum.Submit,
      isDisableAllowed: false,
    },
    {
      actionName: 'reset',
      actionType: ActionTypeEnum.Reset,
      isDisableAllowed: false,
    },
  ],
  formFields: [
    {
      fieldId: 'name',
      fieldType: FieldTypeEnum.Input,
      label: 'name',
      fieldOrder: 1,
      placeholder: 'name',
      options: { disabled: false, required: false, size: 4 },
    },
  ],
};

export const CityList: DynamicListColumn[] = [
  {
    columnId: 'nameEn',
    columnValue: 'nameEn',
    columnName: 'nameEn',
    actions: [],
  },
  {
    columnId: 'nameAr',
    columnValue: 'nameAr',
    columnName: 'nameAr',
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
    ],
  },
];

export const CityCreateForm: DynamicFormInput = {
  formFields: [
    {
      fieldId: 'nameEn',
      fieldType: FieldTypeEnum.Input,
      label: 'nameEn',
      fieldOrder: 1,
      placeholder: 'nameEn',
      options: { disabled: false, required: true, size: 4 },
    },
    {
      fieldId: 'nameAr',
      fieldType: FieldTypeEnum.Input,
      label: 'nameAr',
      fieldOrder: 2,
      placeholder: 'nameAr',
      options: { disabled: false, required: true, size: 4 },
    },
  ],
  actions: [
    {
      actionName: 'add',
      actionType: ActionTypeEnum.Submit,
      isDisableAllowed: true,
    },
  ],
};

export const CityUpdateForm: DynamicFormInput = {
  formFields: [
    {
      fieldId: 'nameEn',
      fieldType: FieldTypeEnum.Input,
      label: 'nameEn',
      fieldOrder: 1,
      placeholder: 'nameEn',
      options: { disabled: false, required: true, size: 4 },
    },
    {
      fieldId: 'nameAr',
      fieldType: FieldTypeEnum.Input,
      label: 'nameAr',
      fieldOrder: 2,
      placeholder: 'nameAr',
      options: { disabled: false, required: true, size: 4 },
    },
  ],
  actions: [editAction],
};

export const AreaGroupSearchForm: DynamicFormInput = {
  actions: [searchAction, resetAction],
  formFields: [
    {
      fieldId: 'name',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'name',
      placeholder: 'name',
      options: { disabled: false, required: true, size: 4 },
    },
  ],
};

export const AreaGroupList: DynamicListColumn[] = [
  {
    columnId: 'nameEn',
    columnName: 'nameEn',
    columnValue: 'nameEn',
    actions: [],
  },
  {
    columnId: 'nameAr',
    columnName: 'nameAr',
    columnValue: 'nameAr',
    actions: [],
  },
  {
    columnId: 'defaultPrice',
    columnName: 'defaultPrice',
    columnValue: 'defaultPrice',
    actions: [],
  },
  {
    columnId: 'driverPrice',
    columnName: 'driverPrice',
    columnValue: 'driverPrice',
    actions: [],
  },
  {
    columnId: 'actions',
    columnName: 'actions',
    columnValue: 'actions',
    actions: [
      { actionName: 'view', actionType: ListActionTypeEnum.View },
      { actionName: 'edit', actionType: ListActionTypeEnum.Edit },
      { actionName: 'delete', actionType: ListActionTypeEnum.Delete },
    ],
  },
];

export const AreaGroupForm: DynamicFormInput = {
  actions: [addAction],
  formFields: [
    {
      fieldId: 'nameEn',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'nameEn',
      placeholder: 'nameEn',
      options: { required: true, disabled: false, size: 4 },
    },
    {
      fieldId: 'nameAr',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'nameAr',
      placeholder: 'nameAr',
      options: { required: true, disabled: false, size: 4 },
    },
    {
      fieldId: 'driverPrice',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Number,
      label: 'driverPrice',
      placeholder: 'driverPrice',
      options: { required: true, disabled: false, size: 4 },
    },
    {
      fieldId: 'defaultPrice',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Number,
      label: 'defaultPrice',
      placeholder: 'defaultPrice',
      options: { required: true, disabled: false, size: 4 },
    },
  ],
};
export const AreaGroupFormUpdate: DynamicFormInput = {
  actions: [editAction],
  formFields: [
    {
      fieldId: 'nameEn',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'nameEn',
      placeholder: 'nameEn',
      options: { required: true, disabled: false, size: 4 },
    },
    {
      fieldId: 'nameAr',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'nameAr',
      placeholder: 'nameAr',
      options: { required: true, disabled: false, size: 4 },
    },
    {
      fieldId: 'driverPrice',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Number,
      label: 'driverPrice',
      placeholder: 'driverPrice',
      options: { required: true, disabled: false, size: 4 },
    },
    {
      fieldId: 'defaultPrice',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Number,
      label: 'defaultPrice',
      placeholder: 'defaultPrice',
      options: { required: true, disabled: false, size: 4 },
    },
  ],
};

export const AreaSearchForm: DynamicFormInput = {
  actions: [searchAction, resetAction],
  formFields: [
    {
      fieldId: 'name',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'name',
      placeholder: 'name',
      options: { disabled: false, required: false, size: 4 },
    },
    {
      fieldId: 'cityId',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.DropDownList,
      label: 'city',
      placeholder: 'city',
      options: { required: false, disabled: false, size: 4 },
    },
    {
      fieldId: 'areaGroupId',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.DropDownList,
      label: 'areaGroup',
      placeholder: 'areaGroup',
      options: { required: false, disabled: false, size: 4 },
    },
  ],
};

export const AreaList: DynamicListColumn[] = [
  {
    columnId: 'nameEn',
    columnName: 'nameEn',
    columnValue: 'nameEn',
    actions: [],
  },
  {
    columnId: 'nameAr',
    columnName: 'nameAr',
    columnValue: 'nameAr',
    actions: [],
  },
  {
    columnId: 'areaGroupNameEn',
    columnName: 'areaGroupNameEn',
    columnValue: 'areaGroupNameEn',
    actions: [],
  },
  {
    columnId: 'areaGroupNameAr',
    columnName: 'areaGroupNameAr',
    columnValue: 'areaGroupNameAr',
    actions: [],
  },
  {
    columnId: 'cityNameEn',
    columnName: 'cityNameEn',
    columnValue: 'cityNameEn',
    actions: [],
  },
  {
    columnId: 'cityNameAr',
    columnName: 'cityNameAr',
    columnValue: 'cityNameAr',
    actions: [],
  },
  {
    columnId: 'actions',
    columnName: 'actions',
    columnValue: 'actions',
    actions: [
      { actionName: 'view', actionType: ListActionTypeEnum.View },
      { actionName: 'edit', actionType: ListActionTypeEnum.Edit },
      { actionName: 'delete', actionType: ListActionTypeEnum.Delete },
    ],
  },
];

export const AreaCreateForm: DynamicFormInput = {
  actions: [addAction],
  formFields: [
    {
      fieldId: 'nameEn',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'nameEn',
      placeholder: 'nameEn',
      options: { required: true, disabled: false, size: 4 },
    },
    {
      fieldId: 'nameAr',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'nameAr',
      placeholder: 'nameAr',
      options: { required: true, disabled: false, size: 4 },
    },
    {
      fieldId: 'cityId',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.DropDownList,
      label: 'city',
      placeholder: 'city',
      options: { required: true, disabled: false, size: 4 },
    },
    {
      fieldId: 'areaGroupId',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.DropDownList,
      label: 'areaGroup',
      placeholder: 'areaGroup',
      options: { required: true, disabled: false, size: 4 },
    },
  ],
};

export const AreaUpdateForm: DynamicFormInput = {
  actions: [editAction],
  formFields: [...AreaCreateForm.formFields],
};

export const OrderStatusSearchForm: DynamicFormInput = {
  actions: [searchAction, resetAction],
  formFields: [
    {
      fieldId: 'name',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'name',
      placeholder: 'name',
      options: { disabled: false, required: false, size: 4 },
    },
  ],
};

export const OrderStatusList: DynamicListColumn[] = [
  {
    columnId: 'nameEn',
    columnName: 'nameEn',
    columnValue: 'nameEn',
    actions: [],
  },
  {
    columnId: 'nameAr',
    columnName: 'nameAr',
    columnValue: 'nameAr',
    actions: [],
  },
  {
    columnId: 'actions',
    columnName: 'actions',
    columnValue: 'actions',
    actions: [
      { actionName: 'view', actionType: ListActionTypeEnum.View },
      { actionName: 'edit', actionType: ListActionTypeEnum.Edit },
      { actionName: 'delete', actionType: ListActionTypeEnum.Delete },
    ],
  },
];

const OrderFormFields = [
  {
    fieldId: 'nameEn',
    fieldOrder: 1,
    fieldType: FieldTypeEnum.Input,
    label: 'nameEn',
    placeholder: 'nameEn',
    options: { disabled: false, required: true, size: 4 },
  },
  {
    fieldId: 'nameAr',
    fieldOrder: 2,
    fieldType: FieldTypeEnum.Input,
    label: 'nameAr',
    placeholder: 'nameAr',
    options: { disabled: false, required: true, size: 4 },
  },
  {
    fieldId: 'backgroundColor',
    fieldOrder: 3,
    fieldType: FieldTypeEnum.ColorPicker,
    label: 'backgroundColor',
    placeholder: 'backgroundColor',
    options: { disabled: false, required: false, size: 4 },
  },
  {
    fieldId: 'icon',
    fieldOrder: 4,
    fieldType: FieldTypeEnum.ImageFile,
    label: 'icon',
    placeholder: 'icon',
    options: { disabled: false, required: false, size: 4 },
  },
  {
    fieldId: 'sortNumber',
    fieldOrder: 5,
    fieldType: FieldTypeEnum.Number,
    label: 'sortNumber',
    placeholder: 'sortNumber',
    options: { disabled: false, required: true, size: 4 },
  },
  {
    fieldId: 'isPaid',
    fieldOrder: 6,
    fieldType: FieldTypeEnum.CheckBox,
    label: 'isPaid',
    value: false,
    placeholder: 'isPaid',
    options: { disabled: false, required: false, size: 4 },
  },
  {
    fieldId: 'isEditablePrice',
    fieldOrder: 7,
    fieldType: FieldTypeEnum.CheckBox,
    label: 'isEditablePrice',
    value: false,
    placeholder: 'isEditablePrice',
    options: { disabled: false, required: false, size: 4 },
  },
  {
    fieldId: 'isOrderPriceIncluded',
    fieldOrder: 1,
    fieldType: FieldTypeEnum.CheckBox,
    label: 'isOrderPriceIncluded',
    value: false,
    placeholder: 'isOrderPriceIncluded',
    options: { disabled: false, required: false, size: 4 },
  },
];

export const OrderStatusCreateForm: DynamicFormInput = {
  actions: [addAction],
  formFields: JSON.parse(JSON.stringify([...OrderFormFields])),
};

export const OrderStatusUpdateForm: DynamicFormInput = {
  actions: [editAction],
  formFields: [...OrderFormFields],
};

export const PromoCodeSearchForm: DynamicFormInput = {
  actions: [searchAction, resetAction],
  formFields: [
    {
      fieldId: 'name',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'name',
      placeholder: 'name',
      options: { disabled: false, required: false, size: 4 },
    },
    {
      fieldId: 'expiryType',
      fieldOrder: 2,
      fieldType: FieldTypeEnum.DropDownList,
      label: 'expiryType',
      placeholder: 'expiryType',
      options: { disabled: false, required: false, size: 4 },
    },
  ],
};

export const PromoCodeList: DynamicListColumn[] = [
  {
    columnId: 'code',
    columnName: 'code',
    columnValue: 'code',
    actions: [],
  },
  {
    columnId: 'percentage',
    columnName: 'percentage',
    columnValue: 'percentage',
    actions: [],
  },
  {
    columnId: 'expiryType',
    columnName: 'expiryType',
    columnValue: 'expiryType',
    actions: [],
  },
  {
    columnId: 'expiryDate',
    columnName: 'expiryDate',
    columnValue: 'expiryDate',
    actions: [],
  },
  {
    columnId: 'ordersLimit',
    columnName: 'ordersLimit',
    columnValue: 'ordersLimit',
    actions: [],
  },
  {
    columnId: 'createdBy',
    columnName: 'createdBy',
    columnValue: 'createdBy',
    actions: [],
  },
  {
    columnId: 'actions',
    columnName: 'actions',
    columnValue: 'actions',
    actions: [
      { actionName: 'view', actionType: ListActionTypeEnum.View },
      { actionName: 'edit', actionType: ListActionTypeEnum.Edit },
      { actionName: 'delete', actionType: ListActionTypeEnum.Delete },
    ],
  },
];

const PromoCodeFormFields = [
  {
    fieldId: 'percentage',
    fieldOrder: 1,
    fieldType: FieldTypeEnum.Number,
    label: 'percentage',
    placeholder: 'percentage',
    options: { disabled: false, required: true, size: 4 },
  },
  {
    fieldId: 'code',
    fieldOrder: 1,
    fieldType: FieldTypeEnum.Input,
    label: 'code',
    placeholder: 'code',
    options: { disabled: false, required: true, size: 4 },
  },
  {
    fieldId: 'expiryType',
    fieldOrder: 1,
    fieldType: FieldTypeEnum.DropDownList,
    label: 'expiryType',
    placeholder: 'expiryType',
    options: { disabled: false, required: true, size: 4 },
  },
  {
    fieldId: 'expiryDate',
    fieldOrder: 1,
    fieldType: FieldTypeEnum.Date,
    label: 'expiryDate',
    placeholder: 'expiryDate',
    options: { disabled: false, required: true, size: 4 },
  },
  {
    fieldId: 'ordersLimit',
    fieldOrder: 1,
    fieldType: FieldTypeEnum.Number,
    label: 'ordersLimit',
    placeholder: 'ordersLimit',
    options: { disabled: false, required: true, size: 4 },
  },
];

export const PromoCodeCreateForm: DynamicFormInput = {
  actions: [addAction],
  formFields: JSON.parse(JSON.stringify(PromoCodeFormFields)),
};

export const PromoCodeUpdateForm: DynamicFormInput = {
  actions: [editAction],
  formFields: JSON.parse(JSON.stringify(PromoCodeFormFields)),
};

export const MsgCreateForm: DynamicFormInput = {
  actions: [addAction],
  formFields: [
    {
      fieldId: 'messageText',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'messageText',
      placeholder: 'messageText',
      options: { disabled: false, required: true, size: 4 },
    },
    {
      fieldId: 'sentTo',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.DropDownList,
      label: 'sentTo',
      placeholder: 'sentTo',
      options: { disabled: false, required: true, size: 4 },
    },
    {
      fieldId: 'sentToText',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'sentToText',
      placeholder: 'sentToText',
      options: { disabled: false, required: true, size: 4 },
    },
  ],
};

export const DashboardSearchForm: DynamicFormInput = {
  actions: [searchAction, resetAction],
  formFields: [
    {
      fieldId: 'name',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'name',
      placeholder: 'name',
      options: { disabled: false, required: false, size: 4 },
    },
  ],
};

export const AddNoteForm: DynamicFormInput = {
  actions: [addAction],
  formFields: [
    {
      fieldId: 'OrderNoteText',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.Input,
      label: 'note',
      placeholder: 'note',
      options: { disabled: false, required: true, size: 12 },
    },
    {
      fieldId: 'File',
      fieldOrder: 1,
      fieldType: FieldTypeEnum.File,
      label: 'file',
      placeholder: 'file',
      options: { disabled: false, required: false, size: 12 },
    },
  ],
};
