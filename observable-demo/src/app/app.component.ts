import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observable-demo';

  data : any = '';

  // observable : Observable<any> = new Observable(subscriber => {
  //   subscriber.next(1);
  //   subscriber.next(2);
  //   subscriber.next(3);
  //   subscriber.next("Keyur");
  //   setTimeout(() => {
  //     subscriber.next(4);
  //     subscriber.next("Denish");
  //     subscriber.complete();
  //   }, 1000);
  // });

  constructor(private demoService : DemoService){}

  ngOnInit() {
    console.log("Before Subsribe...!");
    //this.observable.subscribe(
    this.demoService.getObservable().subscribe(  
      (data : any)=>{
        console.log("Data : "+data);
        this.data = data;
      },
      (error) => {
        console.log("Error...!"+error);
      },
      ()=>{
        console.log("Done...!")
      }
    )
    console.log("After Subsribe...!");
  }

}
