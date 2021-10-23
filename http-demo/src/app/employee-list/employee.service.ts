import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  serverURL : string = 'http://localhost:3000';

  constructor(private httpClient : HttpClient) { 
    console.log("Employee Service Object Created...!");
  }

  getAllEmployees() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.serverURL+"/employees");
  }

  getEmployeeById(id : number) : Observable<Employee> {
    return this.httpClient.get<Employee>(this.serverURL+"/employees/"+id);
  }

  saveEmployee(employee : Employee) : Observable<Employee> {
    return this.httpClient.post<Employee>(this.serverURL+"/employees",employee);
  }

  updateEmployee(employee : Employee) : Observable<Employee> {
    return this.httpClient.put<Employee>(this.serverURL+"/employees/"+employee.id,employee);
  }

  deleteEmployeeById(id : number) : Observable<void> {
    return this.httpClient.delete<void>(this.serverURL+"/employees/"+id);
  }
}
