import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee-list/employee.model';
import { EmployeeService } from '../employee-list/employee.service';
@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent implements OnInit {

  id : number = 0;

  employeeEntryForm : FormGroup;  

  employee : Employee = new Employee();

  @Output() refreshList : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb : FormBuilder,private employeeService : EmployeeService) { }

  ngOnInit(): void {
    alert(this.id);
    this.createEmployeeForm(this.id);
  }

  createEmployeeForm(id : number) : void {
    this.employeeEntryForm = this.fb.group({
      id : [id,Validators.required],
      name : ['',Validators.required],
      city : ['',Validators.required],
      salary : [0,Validators.required],
      designation : ['',Validators.required],
    })
  }

  save() : void {
    if(this.employeeEntryForm.valid){
      this.employee = this.employeeEntryForm.value;  
      this.employeeService.saveEmployee(this.employee).subscribe(
        (data : Employee)=>{
          alert("Employee Saved Successfully with id : "+data.id);
          this.refreshList.emit(true);
        },
        (error)=>{
          console.log(error);
        }
      )
    }
  }

}
