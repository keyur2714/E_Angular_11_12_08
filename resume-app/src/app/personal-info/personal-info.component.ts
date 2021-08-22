import { Component, OnInit } from '@angular/core';
console.log("Hi...!");
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  //Below All are Instance Variable and direct accessible in template....
  //in same class we can access with "this" keyword.
  firstName : string = '';
  lastName : string = 'Thakor'
  age : number = 34;
  dateOfBirth : Date = new Date("1986-12-27");
  gender : string = 'Male';

  constructor() { 
    console.log("Personal Info Component Object Created....!");
  }

  //used for initialization
  ngOnInit(): void {
    console.log("Always Called after constructor...!");
    this.firstName = "Keyursinh";
  }

}
