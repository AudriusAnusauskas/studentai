import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GrupesComponent } from './grupes/grupes.component';
import { StudentaiComponent } from './grupes/studentai/studentai.component';

@NgModule({
  declarations: [
    AppComponent,
    GrupesComponent,
    StudentaiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
