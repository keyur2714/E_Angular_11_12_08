import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SequenceObservableComponent } from './sequence-observable/sequence-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    SequenceObservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
