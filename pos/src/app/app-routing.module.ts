import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { UserComponent } from './user/user/user.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';

const routes: Routes = [
  {path : "home",component : HomeComponent},
  {path : "aboutus",component : AboutUsComponent},
  {path : "contact-us",component : ContactUsComponent},
  {path : "login",component : LoginComponent},  
  {path : "logout",component : LogoutComponent},
  {path : "products",component : UserComponent, canActivate : [AuthGuardService] },
  {path : 'admin' , loadChildren : () => import('./admin/admin.module').then(n=>n.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("App Routing Module Loaded...!");
  }
}
