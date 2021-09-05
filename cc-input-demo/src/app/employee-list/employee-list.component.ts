import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.mode';

class Master{
  dataList: any[];
  fieldList : string[];
  headerList : string[];
  bgColor : string;
  textColor : string;
  listType : string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  masterList : Master[] = [];

  headerList : string[] = ["Id","Name","Department","Designation","Salary"];
  fieldList : string[] = ["id","name","dept","designation","salary"];
  employeeList : Employee[] = [];

  constructor() { }

  ngOnInit(): void {
    let emp1 = new Employee(11,"Keyur","IT",111111,"Tech Lead");
    let emp2 = new Employee(12,"Denish","MR",111222,"Manager");
    let emp3 = new Employee(13,"Vinit","SALES",211111,"Manager");

    this.employeeList = [emp1,emp2,emp3];  

    let master1 = new Master();
    master1.dataList = this.employeeList;
    master1.bgColor = "danger";
    master1.textColor = "white";
    master1.headerList = this.headerList;
    master1.fieldList = this.fieldList;
    this.masterList.push(master1);
  }

}
