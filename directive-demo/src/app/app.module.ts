import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorDirective } from './directives/color.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { MyLoopDirective } from './directives/my-loop.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    MyIfDirective,
    MyLoopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Object Created...!");
  }
}
