import { ActionTypeEnum, FieldTypeEnum, ListActionTypeEnum } from "../enums/enums";

export class FormAction {
  actionName: string;
  actionType: ActionTypeEnum;
  isDisableAllowed: boolean;
}
export class ListAction {
  actionName: string;
  actionType: ListActionTypeEnum;
}
export class PageDetailsAction {
  actionName: string;
  actionType: ListActionTypeEnum;
}









