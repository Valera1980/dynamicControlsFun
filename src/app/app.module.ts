import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { DynComponentPlaceComponent } from './dyn-component-place/dyn-component-place.component';
import { CalendarWrapperValAccesorComponent } from './calendar-wrapper-val-accesor/calendar-wrapper-val-accesor.component';
import { DropdownWrapperValAccesorComponent } from './dropdown-wrapper-val-accesor/dropdown-wrapper-val-accesor.component';
import { PeriodWrapperValAccesorComponent } from './period-wrapper-val-accesor/period-wrapper-val-accesor.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactFormComponent,
    CalendarWrapperComponent,
    DynComponentPlaceComponent,
    CalendarWrapperValAccesorComponent,
    DropdownWrapperValAccesorComponent,
    PeriodWrapperValAccesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
