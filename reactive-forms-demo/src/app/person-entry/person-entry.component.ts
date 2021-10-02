import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from './person.model';

@Component({
  selector: 'app-person-entry',
  templateUrl: './person-entry.component.html',
  styleUrls: ['./person-entry.component.css']
})
export class PersonEntryComponent implements OnInit {
  
  personForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createPersonForm();
  }

  createPersonForm() : void {
    this.personForm  = new FormGroup({
      name : new FormControl('Keyur',Validators.required),
      age : new FormControl(34,[Validators.required,Validators.pattern('^[0-9]+$')]),
      gender : new FormControl('M'),
      mobileNo : new FormControl('7387029671',[Validators.required,Validators.pattern('^[0-9]+$')]),
      email : new FormControl('keyurjava27@gmail.com',[Validators.required,Validators.email]),
      hobbies : new FormArray([new FormControl('cricket')])
    });
  }

  save() : void {
    console.log(this.personForm);
    if(this.personForm.valid){
      console.log(this.personForm.value);
      console.log("Name : "+this.personForm.get('name').value);
      let person=new Person();
      person = this.personForm.value;
      
      console.log(person);
    }    
  }

  addNew() : void {
    let newHobby = new FormControl('');
    (<FormArray>this.personForm.controls['hobbies']).push(newHobby);
  }

  reset() : void {    
    this.personForm.setValue({name : "Keyur",age : 34,gender : "M",mobileNo : "7387029671",email : "keyurjava27@gmail.com"});
    this.personForm.patchValue({mobileNo : "8600712124"});
    let person=new Person(11,"vinit",35,"M","9879534778","vinit2cute@gmail.com");
    //this.personForm.setValue(person);
    this.personForm.patchValue(person);
  }
}
