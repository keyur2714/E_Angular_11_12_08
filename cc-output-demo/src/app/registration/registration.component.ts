import { Component, OnInit } from '@angular/core';
import { Lookup } from '../lookup.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  countryList : Lookup[] = [];
  stateList : Lookup[] = []; 

  selectedCountry : Lookup = new Lookup();
  selectedState : Lookup = new Lookup();

  constructor() { }

  ngOnInit(): void {
    let country1 : Lookup = new Lookup(1,"IND","India");
    let country2 : Lookup = new Lookup(2,"US","United States");
    let country3 : Lookup = new Lookup(3,"UK","United Kingdom");

    this.countryList = [country1,country2,country3];

    let state1 : Lookup = new Lookup(11,"GUJ","Gujrat");
    let state2 : Lookup = new Lookup(12,"MH","Maharashtra");
    let state3 : Lookup = new Lookup(13,"TX","Texas");

    this.stateList.push(state1);
    this.stateList.push(state2);
    this.stateList.push(state3);

    this.selectedCountry = this.countryList[1];
    this.selectedState = this.stateList[2];
  }

  getSelectedState(state) : void{
    this.selectedState = state;
  }

  getSelectedCountry(country) : void {
    this.selectedCountry = country;
  }
}
