import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  template: '',
  styles: ['']
})
export class LogoutComponent implements OnInit {

  constructor(private router : Router,private authService : AuthService) { }

  ngOnInit(): void {
    sessionStorage.removeItem("usertoken");
    this.authService.isLoggedIn = false;
    this.authService.successUrl = 'home';
    this.router.navigate(['login']);
  }


}
