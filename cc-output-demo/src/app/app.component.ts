import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cc-output-demo';

  newMessage : string = ''; 

  getMessage(event) : void {
    //alert(event);
    //alert(2);
    this.newMessage = event;
  }
}
