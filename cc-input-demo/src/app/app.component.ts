import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cc-input-demo';

  name : string = 'Keyur Thakor';

  messageList : any [] = [
    {
     "message" : "Hi",
     "messageType" : "info"
    },
    {
      "message" : "Hello",
      "messageType" : "warning"
    },
    {
      "message" : "Good Morning",
      "messageType" : "success"
    },
    {
      "message" : "Good Afternoon",
      "messageType" : "danger"
    }      
  ];

  person = {
    "firstName" : "Vinit",
    "lastName" : "Shah",
    "email" : "vinit.marketing@gmail.com",
    "mobileNo": "9879534778",
    "age" : 35,
    "city" : "Bardoli"
  };
    
  
}
