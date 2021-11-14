import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'students' , component : StudentsComponent},
  {path : 'student-entry' , component : StudentEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
