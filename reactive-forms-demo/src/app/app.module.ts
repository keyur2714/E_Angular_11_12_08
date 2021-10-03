import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonEntryComponent } from './person-entry/person-entry.component';
import { DeptEntryComponent } from './dept-entry/dept-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonEntryComponent,
    DeptEntryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
