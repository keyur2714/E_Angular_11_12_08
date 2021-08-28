import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  result : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add(num1 : string,num2 : string) : void {    
    let result : number = parseInt(num1) + parseInt(num2);
    //alert(result);
    this.result = result;
  }

  sub(num1 : string,num2 : string) : void{
    let result : number = parseInt(num1) - parseInt(num2);
    //alert(result);
    this.result = result;
  }

  mul(num1 : string,num2 : string) : void{
    let result : number = parseInt(num1) * parseInt(num2);
    //alert(result);
    this.result = result;
  }

  div(num1 : string,num2 : string) : void{
    let n2= parseInt(num2);
    if(n2 === 0){
      alert("Devide by zero not possible.") ;
      return;
    }
    let result : number = parseInt(num1) / parseInt(num2);
    this.result = result;
    //alert(result);
  }
}
