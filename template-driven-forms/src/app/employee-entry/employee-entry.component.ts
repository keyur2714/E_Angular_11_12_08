import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from './department.model';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent implements OnInit {

  newEmployee : Employee = new Employee();

  deptList : Department[] = [];

  constructor() { }

  ngOnInit(): void {
    let dept1 = new Department(11,"IT");
    let dept2 = new Department(12,"SALES");
    let dept3 = new Department(13,"HR");
    this.deptList.push(dept1);
    this.deptList.push(dept2);
    this.deptList.push(dept3);
    this.newEmployee.gender = 'M';
    this.newEmployee.dept = dept1;
  }

  save(empForm : NgForm) : void {
    if(empForm.valid){
      console.log(this.newEmployee);
    }
  }

}
