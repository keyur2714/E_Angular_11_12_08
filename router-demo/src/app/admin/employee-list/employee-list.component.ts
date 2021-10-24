import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList : Employee[] = [];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() : void {
    this.employeeService.getAllEmployees().subscribe(
      (data : Employee[])=>{
        this.employeeList = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
