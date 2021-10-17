import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  
  employeeList : Employee[] = [];

  employee : Employee = new Employee();

  @Output() editId : EventEmitter<number> = new EventEmitter<number>();

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {    
    this.getEmployeeList();
  }  

  getEmployeeList() : void {
    this.employeeService.getAllEmployees().subscribe(
      (data : Employee[])=>{
        this.employeeList = data;
      },
      (error)=>{
        console.log("Error : "+error);
      }
    )
  }

  edit(id : number) : void {
    //alert(id);
    if(id > 0) {
      this.editId.emit(id);
    }
  }

  delete(id : number) : void {
    alert(id);
  }

  getEmployeeDetail(empId : number) : void {
    this.employeeService.getEmployeeById(empId).subscribe(
      (data : Employee) => {
        this.employee = data;
      },
      (error)=>{
        console.log("Error : "+error);
      }
    )
  }
  
}
