import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Resume'; //instance variable
  firstName : string = 'Keyur';
  lastName : string = 'Thakor';
}
