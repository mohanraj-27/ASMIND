import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Iemployee} from '../ts file/attendance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

private _api: string = "/assets/data/employees.json";
  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Iemployee[]>
  {
    return this.http.get<Iemployee[]>(this._api); 
  }
  public deleteEmployee(employee) {
    return this.http.delete<Iemployee>("/deleteAttendance" + "/"+ employee.empId);
  }
  public createEmployee(employee) {
    return this.http.post<Iemployee>("/addAttendance", employee);
  }

}