import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, httpFormDataOptions, httpOptions } from '../global-variables/api-config';
import { environment } from '../../environments/environment';
import { DynamicFormInput } from '../models/dynamic-form-input';
import { DynamicListInput } from '../models/dynamic-list.model';
const apiPreLink = environment.apiPreLink;
@Injectable({
  providedIn: 'root'
})
export class DynamicDataService {

  constructor(private http: HttpClient) {

  }

  public getFormSettings(fileName: string): Observable<DynamicFormInput> {
    return this.http.get<DynamicFormInput>(apiPreLink + "DynamicData/GetSettings?fileName=" + fileName);
  }
  public getListSettings(fileName: string): Observable<DynamicListInput> {
    return this.http.get<DynamicListInput>(apiPreLink + "DynamicData/GetSettings?fileName=" + fileName);
  }
}
