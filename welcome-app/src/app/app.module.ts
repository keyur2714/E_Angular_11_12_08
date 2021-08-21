import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { FriendsComponent } from './friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    FriendsComponent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent,MessageComponent]
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Object Created....!");
  }
}
