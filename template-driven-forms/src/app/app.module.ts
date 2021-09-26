import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseEntryComponent } from './course-entry/course-entry.component';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseEntryComponent,
    EmployeeEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
