import { HttpHeaders, HttpParams } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  })
};
export const httpHeaders= new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8'
});
export const options = {httpHeaders, responseType: 'text' as 'text'};

export const httpFormDataOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*'
  }),
  responseType: 'text' as 'json'
};
































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































export enum Controllers {
  Auth = 'Auth/',
  User = 'User/',
  Message = 'Message/',
  Employee = 'Employee/',
  Business = 'Business/',
  AccountType = 'AccountType/',
  BusinessStatus = 'BusinessStatus/',
  Country = 'Country/',
  City = 'City/',
  CorporateType = 'CorporateType/',
  Filters = 'Filters/',
  Groups = 'Groups/',
  JobTitle = 'JobTitle/',
  Nationality = 'Nationality/',
  NoOfEmployee = 'NoOfEmployee/',
  Sector = 'Sector/',
  SubSector = 'SubSector/',
  TitleField = 'TitleField/',
  TitleLevel = 'TitleLevel/',
  Person = 'Person/',
  ContactUS = 'ContactUs/',
  Contacts = 'Contacts/',
  AppSettings = 'AppSettings/',
  AreaGroup = "AreaGroup/",
  Area = "Area/",
  OrderStatus = "OrderStatus/",
  Record = "Record/",
  Order = "Order/",
  PromoCode = "PromoCode/",
  OrderNotes = "OrderNotes/",
  FinancialRound = "FinancialRound/",
  ClientBrand = "ClientBrand/",
  File = "File/",
  Notification = "Notification/",
  TestData = "TestData/"
}
































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































export enum Actions {
  GetList = 'ListForAdmin',
  List = 'List',
  ReactivateAll = 'ReactivateAll',
  GetClientById = 'GetClientById',
  DailyRecords = 'DailyRecords',
  GetDriversDetails = 'GetDriversDetails',
  GetClientsDetails = 'GetClientsDetails',
  GetUserOrders = 'GetUserOrders',
  Reactivate = 'Reactivate',
  DownloadExcel = 'DownloadExcel',
  GetRequestsList = 'GetRequestsList',
  GetFilteredItems = 'GetFilteredItems',
  GetById = 'GetForAdmin',
  Get = 'Get',
  GetAll = 'GetAll',
  GetByParentId = 'GetByParentId',
  GetAllItems = 'GetAllForAdmin',
  PostItem = 'Create',
  CreateUser = 'CreateUser',
  PostRange = 'PostRange',
  EditItem = 'Update',
  EditItemStatus = 'UpdateStatus',
  DeleteSetItem = 'DeleteSetItem',
  EditRange = 'EditRange',
  RemoveItemById = 'Delete',
  RemoveItem = 'Delete',
  DeletePersonJob = 'DeletePersonJob',
  DeleteBusinessPartner = 'DeleteBusinessPartner',
  DeleteBoardOfDirector = 'DeleteBoardOfDirector',
  RemoveItemImage = 'DeleteItemImage',
  RemoveRange = 'RemoveRange',
  Login = 'AdminLogin',
  UpdateStatus = 'UpdateStatus',
  UpdateUserInfo = 'UpdateUserInfo',
  SendNotificationToMultiUsers = 'SendNotificationToMultiUsers',
  PodcastAllUsersNotification = 'SendPushNotificationAllUsers',
  PodcastMultiUsersNotification = 'PodcastMultiUsersNotification',
  AddItemImages = 'AddItemImages',
  GetItemByIdWithRelated = 'GetItemByIdWithRelated',
  GetRoles = 'GetRoles',
  GetEmployeeRoles = 'GetEmployeeRoles',
  UpdateEmployeeInfo = "UpdateEmployeeInfo",
  AddBoardOfDirector = "AddBoardOfDirector",
  EditBoardOfDirector = "EditBoardOfDirector",
  AddBusinessPartner = "AddBusinessPartner",
  EditBusinessPartner = "EditBusinessPartner",
  AddBusinessClassifications = "AddBusinessClassification",
  EditBusinessClassifications = "EditBusinessClassification",
  AddPersonJob = "AddPersonJob",
  EditPersonJob = "EditPersonJob",
  ChangePassword = "ChangePassword",
  AssignRecordToDriver = "AssignRecordToDriver",
  ListWithRevenue = 'ListWithRevenue',
  UpdateDetails = 'UpdateOrderDetails',
  UpdatePrice = 'UpdateOrderPrice',
  UpdateOrderStatus = 'UpdateOrderStatus',
  MoveOrders = 'MoveOrders',
  GetForUpdate = "GetForUpdate",
  GetRecord = 'GetDailyRecord',
  GetRevenue = 'GetCompanyRevenue',
  UpdateAsync = 'Update',
  ExportPdf = 'ExportOrderDetailsPdf',
  CreateClient = "CreateClient",
  GetUserRoles = "GetUserRoles",
  DailyRecordsByRoundId = "DailyRecordsByRoundId",
  ForgetPassword = "ForgetPassword",
  ValidateOtp = "ValidateOtp",
  ResetPasswordEmail = "ResetPasswordEmail",
  ResetPasswordPhone = "ResetPasswordPhone",
  GetNonEmployeeRoles = "GetNonEmployeeRoles",
  SendPushNotificationByRole = "SendPushNotificationByRole",
  ResetPassword = "ResetPassword",
  GetActiveDriversList = "GetActiveDriversList",
  UpdateMerchant = "UpdateMerchant"
}