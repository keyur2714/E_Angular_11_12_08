import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take,filter,map } from 'rxjs/operators';
@Component({
  selector: 'app-sequence-observable',
  templateUrl: './sequence-observable.component.html',
  styleUrls: ['./sequence-observable.component.css']
})
export class SequenceObservableComponent implements OnInit {

  seqNo : number = 0;
  numObservable : Observable<number> = interval(1000);

  constructor() { }

  ngOnInit(): void {
    // //continue subsribe
    // this.numObservable.subscribe(
    //   (data : number)=>{
    //     //console.log(data);
    //     this.seqNo = data;
    //   },
    //   (error)=>{
    //     console.log("Error...!"+error);
    //   }
    // )
    this.numObservable.pipe(
      filter(no=>no%2==0),
      map(no=>no*2),
      take(10)
    ).subscribe(
      (data : number)=>{
        //console.log(data);
        this.seqNo = data;
      },
      (error)=>{
        console.log("Error...!"+error);
      },
      ()=>{
        console.log("Done...!");
      }
    )
  }

}
