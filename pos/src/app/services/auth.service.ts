import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user/user.mode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn : boolean = false;
  successUrl : string = 'home';
  userAPI : string = 'http://localhost:3000/users';

  constructor(private http : HttpClient) { }

  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.userAPI);
  }

  authenticate(username ?: string,password ?: string) : Observable<User> {
    return this.getAllUsers().pipe(
      map(users=>{
        for(let user of users){
          if(user.username === username && user.password === password){
            this.isLoggedIn = true;
            return user;
          }
        }
      })
    )    
  }
}
