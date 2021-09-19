import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,OnDestroy{
  title = 'Directive Demo';
  border : string = '10px solid red';
  @ViewChild("x",{static : true}) xx : ElementRef;

  images : string[] = ["POHA","IDLI","TEA","MBUN"];

  condition : boolean = true;

  constructor(){
    console.log("App Component Object Created...!");
  }

  ngOnInit(){
    console.log(this.xx.nativeElement);
  }

  ngAfterViewInit() {
    console.log(this.xx.nativeElement+" -------");    
  }

  ngOnDestroy(){
    console.log("Bye...!");
  }

}
