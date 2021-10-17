import { Component, ViewChild } from '@angular/core';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-demo';
  
  @ViewChild(EmployeeListComponent)
  employeeListComponent : EmployeeListComponent;

  @ViewChild(EmployeeEntryComponent)
  employeeEntryComponent :  EmployeeEntryComponent;

  isRefresh(event) : void {        
    if(event){
      this.employeeListComponent.ngOnInit();
    }    
  }

  getEditId(id) : void {
    this.employeeEntryComponent.id = id;
    this.employeeEntryComponent.ngOnInit();
  }
}
