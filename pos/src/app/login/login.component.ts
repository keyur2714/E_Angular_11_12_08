import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../user/user.mode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';

  constructor(private authService : AuthService,private router : Router) { }

  ngOnInit(): void {
  }

  login(frm : NgForm) : void {
    if(frm.valid){
      this.authService.authenticate(this.username,this.password).subscribe(
        (user : User)=>{
          sessionStorage.setItem("usertoken",user.token);
          this.router.navigate([this.authService.successUrl]);
        }
      )
    }

  }

}
