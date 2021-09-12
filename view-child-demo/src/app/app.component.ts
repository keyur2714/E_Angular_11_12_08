import { Component, ElementRef, ViewChild } from '@angular/core';
import { StringUtilComponent } from './string-util/string-util.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'view-child-demo';

  @ViewChild("msg") m : ElementRef;

  @ViewChild(StringUtilComponent) stringUtilComponent : StringUtilComponent;

  changeH1() : void {
    console.log(this.m);
    this.m.nativeElement.innerHTML="Hello Good Morning All...!";
    this.m.nativeElement.style.color="green";
    this.m.nativeElement.style.fontSize="20px";
    //alert("Hi...!");
  }

  convertToUpper() : void {
    this.stringUtilComponent.str = "Keyur";
    alert(this.stringUtilComponent.toUpper());
  }

  convertToLower() : void {
    this.stringUtilComponent.str = "vijay";
    alert(this.stringUtilComponent.toLower());
  }

  convertToReverse() : void {
    this.stringUtilComponent.str = "hitesh";
    alert(this.stringUtilComponent.toReverse());
  }
}
