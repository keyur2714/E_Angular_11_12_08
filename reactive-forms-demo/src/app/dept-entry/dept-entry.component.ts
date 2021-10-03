import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from './employee.model';

@Component({
  selector: 'app-dept-entry',
  templateUrl: './dept-entry.component.html',
  styleUrls: ['./dept-entry.component.css']
})
export class DeptEntryComponent implements OnInit {

  deptForm : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.createDepartmentForm();
  }

  createDepartmentForm() : void {
    this.deptForm = this.fb.group({
      deptId : [0,Validators.required],
      deptName : ['',Validators.required],
      employees : this.fb.array([this.fb.group(new Employee())])      
    })
  }

  save() : void {
    console.log(this.deptForm.value);
  }

  addNewEmployee() : void {
    let newEmpGroup = new Employee();
    (<FormArray>this.deptForm.get("employees")).push(this.fb.group(newEmpGroup));
  }
}
