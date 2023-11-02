import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseInputComponent } from './base-input/base-input.component';
import { BaseComboboxComponent } from './base-combobox/base-combobox.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseInputComponent,
    BaseComboboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
