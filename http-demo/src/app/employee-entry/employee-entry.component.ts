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
    //alert(this.id);
    if(this.id !== 0){
      this.employeeService.getEmployeeById(this.id).subscribe(
        (data)=>{
          console.log(data);
          this.employeeEntryForm.setValue(data);
        }
      )
    }else{
      this.createEmployeeForm();
    }
    
  }

  createEmployeeForm() : void {
    this.employeeEntryForm = this.fb.group({
      id : [0,Validators.required],
      name : ['',Validators.required],
      city : ['',Validators.required],
      salary : [0,Validators.required],
      designation : ['',Validators.required],
    })
  }

  save() : void {
    if(this.employeeEntryForm.valid){
      this.employee = this.employeeEntryForm.value;  
      if(this.id === 0){
        this.employeeService.saveEmployee(this.employee).subscribe(
          (data : Employee)=>{
            alert("Employee Saved Successfully with id : "+data.id);
            this.refreshList.emit(true);
          },
          (error)=>{
            console.log(error);
          }
        )
      }else{
        this.employeeService.updateEmployee(this.employee).subscribe(
          (data : Employee)=>{
            alert("Employee Updated Successfully with id : "+data.id);
            this.refreshList.emit(true);
            this.id = 0;
            this.employeeEntryForm.setValue({"id":0,"name":'',"city":'',"salary":0,"designation":''})
          },
          (error)=>{
            console.log(error);
          }
        )
      }      
    }
  }

}
