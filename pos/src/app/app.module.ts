import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,    
    UserComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    LoginComponent,
    LogoutComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //AdminModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},      
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("App Module Object Created...!");
  }
}
