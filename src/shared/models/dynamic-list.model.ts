import { ListAction } from "./dynamic-action.model";

export class DynamicListInput {
  columns: DynamicListColumn[];
  data?: any;
  totalCount: number;
  //actions: FormAction[];
}
export class DynamicListColumn {
  columnId: string;
  columnName: string;
  columnValue: string;
  isFile?=false;
  actions: ListAction[];
}








