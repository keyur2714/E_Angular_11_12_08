import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl : string = 'http://localhost:3000';

  constructor(private httpClient : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.apiUrl+"/employees");
  }
}
