import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeDetailComponent } from './admin/employee-detail/employee-detail.component';
import { EmployeeEntryComponent } from './admin/employee-entry/employee-entry.component';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'about-us' , component : AboutUsComponent},
  {path : 'contact-us' , component : ContactUsComponent},
  {
    path : 'admin' , component : AdminComponent,
    children : [
      {path : 'manage-employee',component : EmployeeListComponent},
      {path : 'create-employee',component : EmployeeEntryComponent},
      {path : 'employee-detail/:id',component : EmployeeDetailComponent},//Route with parameter
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
