import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Dummy} from './dummy';


@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private employeeUrl = 'http://dummy.restapiexample.com/api/v1/employees';  // URL to web api


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET Employees from the server */
  getDummies (): Observable<Dummy> {
    return this.http.get<Dummy>(this.employeeUrl)
  }

}
