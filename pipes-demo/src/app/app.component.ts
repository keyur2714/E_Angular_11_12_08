import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pipes-demo';


  message : string = 'Hello Radhe Krishna...!';

  dateOfBirth : Date = new Date("1986-12-27 14:05:33");

  salary : number = 20000;

  numObservable : Observable<number> = interval(1000);

  seqNo : number = 0;

  name : string = "Keyursinh Thakor";

  teacher : string = "Praveen Jain";

  accountNo : string = "988911220001";

  mobileNo : string = "7387029671";
  
  ngOnInit() {
    // this.numObservable.subscribe(
    //   (data : number) => {
    //     this.seqNo = data;
    //   }
    // )
  }


}
