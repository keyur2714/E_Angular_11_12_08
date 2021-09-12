import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-util',
  templateUrl: './string-util.component.html',
  styleUrls: ['./string-util.component.css']
})
export class StringUtilComponent implements OnInit {

  str : string = 'Hi';

  constructor() { 
    console.log("String Util Component Object Created...!");
  }

  ngOnInit(): void {
  }

  toUpper() : string {
    return this.str.toUpperCase();
  }

  toLower() : string {
    return this.str.toLowerCase();
  }

  toReverse() : string {
    let s = this.str.split('')
    return s.reverse().join("");
  }

}
