import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, Controllers, httpFormDataOptions, httpHeaders, httpOptions } from '../global-variables/api-config';
import { environment } from '../../environments/environment';
import { FieldListData } from '../models/dynamic-form-field';
import { DashboardResponse } from '../models/dashboard-model';
const apiPreLink = environment.apiPreLink;
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private http: HttpClient) {

  }

  public getAllItems(controllerName: string): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetAllItems);
  } public getAll(controllerName: string): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetAll);
  }
  public getAllForList(controllerName: string): Observable<FieldListData[]> {
    return this.http.get<FieldListData[]>(apiPreLink + controllerName + 'GetAllForList');
  }
  public getItemsByKey(controllerName: string, action: string, keyValue: string, value: any): Observable<any> {
    return this.http.get(`${apiPreLink + controllerName + action}?${keyValue}=${value}`);
  }
  public getItems(controllerName: string, action: string): Observable<any> {
    return this.http.get(`${apiPreLink + controllerName + action}`);
  }

  public getRoles(): Observable<FieldListData[]> {
    return this.http.get<FieldListData[]>(apiPreLink + Controllers.User + Actions.GetRoles, httpOptions);
  }
  public getEmployeeRoles(): Observable<FieldListData[]> {
    return this.http.get<FieldListData[]>(apiPreLink + Controllers.User + Actions.GetEmployeeRoles, httpOptions);
  }
  public getUserRoles(userId:number): Observable<any[]> {
    return this.http.get<any[]>(apiPreLink + Controllers.User + Actions.GetUserRoles+'/'+userId, httpOptions);
  }
  public getById(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetById + '/' + id);
  } 
  public getClientById(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetClientById + '/' + id);
  } 
  public getForUpdate(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetForUpdate + '/' + id);
  } 
  public getForPublic(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + 'GetForPublic' + '/' + id);
  } 
  public getDriverDetailsByOrderId(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + 'GetDriverByOrderId' + '/' + id); 
  } 
  public getByIdForUpdate(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.GetForUpdate + '/' + id);
  }
  public reactivate(controllerName: string, actionName: string, orderId: any) {
    return this.http.post<any>(apiPreLink + controllerName + actionName + '?orderId=' + orderId,null, { headers: httpHeaders, responseType: 'text' as 'json' });
  }
  public postItemTextReponse(controllerName: string, actionName: string, postObject: any) {
    return this.http.post<any>(apiPreLink + controllerName + actionName, JSON.stringify(postObject), { headers: httpHeaders, responseType: 'text' as 'json' });
  }
  public downloadPdf(controllerName: string, actionName: string, postObject: any) {
    return this.http.post<any>(apiPreLink + controllerName + actionName, JSON.stringify(postObject),  {observe: 'response', responseType: 'blob' as 'json'});
  }
  public downloadExcel(controllerName: string, actionName: string) {
    return this.http.post<any>(apiPreLink + controllerName + actionName, null,  {observe: 'response', responseType: 'blob' as 'json'});
  }
  public postItem(controllerName: string, actionName: string, postObject: any) {
    return this.http.post<any>(apiPreLink + controllerName + actionName, JSON.stringify(postObject), httpOptions);
  }
   public postFormItem(controllerName: string, actionName: string, postObject: any) {
    return this.http.patch<any>(apiPreLink + controllerName + actionName, postObject, httpFormDataOptions);
  }
  public postFormItemTextReponse(controllerName: string, actionName: string, postObject: any) {
    return this.http.patch<any>(apiPreLink + controllerName + actionName, postObject, { headers: httpFormDataOptions.headers, responseType: 'text' as 'json' });
  }
  public getClienAreaGroupPrices(postObject: any) {
    return this.http.post<any>(apiPreLink + 'AreaGroup/' + 'GetClienAreaGroupPrices', JSON.stringify(postObject), httpOptions);
  }
  public updateAreaGroupClientPrices(model) {
    return this.http.patch<any>(`${apiPreLink}AreaGroup/UpdateAreaGroupPrice`, model,{ headers: httpHeaders, responseType: 'text' as 'json' });
  }
  public PostRange(controllerName: string, actionName: string, postObject: any): Observable<any> {
    return this.http.post(apiPreLink + controllerName + actionName, JSON.stringify(postObject), httpOptions);
  }
  public getDashboardData(request: any): Observable<DashboardResponse[]> {
    return this.http.post<DashboardResponse[]>(apiPreLink + 'Order/GetDashboardData', JSON.stringify(request), httpOptions);
  }
  public editItem(controllerName: string, editObject: any): Observable<any> {
    return this.http.patch(apiPreLink + controllerName + Actions.EditItem, JSON.stringify(editObject),{ headers: httpHeaders, responseType: 'text' as 'json' });
  }

  public editRange(controllerName: string, editObject: any): Observable<any> {
    return this.http.put(apiPreLink + controllerName + Actions.EditRange, JSON.stringify(editObject), httpOptions);
  }

  public removeItemById(controllerName: string, id: number): Observable<any> {
    return this.http.delete(apiPreLink + controllerName + Actions.RemoveItemById + '/' + id,{ headers: httpHeaders, responseType: 'text' as 'json' });
  }
 public removeUserRole(roleObj): Observable<any> {
    return this.http.post(apiPreLink + 'User/RemoveUserRole' ,roleObj,{ headers: httpHeaders, responseType: 'text' as 'json' });
  }

  public removeItem(controllerName: string, id: number): Observable<any> {
    return this.http.get(apiPreLink + controllerName + Actions.RemoveItem + '/' + id);
  }

  public removeRange(controllerName: string, postobject: any): Observable<any> {
    return this.http.post(apiPreLink + controllerName + Actions.RemoveRange, JSON.stringify(postobject), httpOptions);
  }

  public importFromExcel(excelFile) {
    return this.http.post<any>(apiPreLink + Controllers.Order + 'ImportExcelData', excelFile, { headers: httpFormDataOptions.headers, responseType: 'text' as 'json' })
  }

  public downloadFile(fileName: string) {
    return this.http.get(apiPreLink + Controllers.File + 'Download?file='+fileName, {
      reportProgress: true,
      responseType: 'blob'
    });
  }
  public getAppSettings() {
    return this.http.get(apiPreLink + 'AppSettings/GetAppSettings')
  }
}
