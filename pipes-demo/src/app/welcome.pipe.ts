import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  constructor() {
    console.log("Welcome Pipes Object Created...!");
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log("--------"+value);
    let newValue = "Welcome To Angular World "+value;
    return newValue;
  }

}
