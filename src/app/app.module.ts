import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { DynComponentPlaceComponent } from './dyn-component-place/dyn-component-place.component';
import { CalendarWrapperValAccesorComponent } from './calendar-wrapper-val-accesor/calendar-wrapper-val-accesor.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactFormComponent,
    CalendarWrapperComponent,
    DynComponentPlaceComponent,
    CalendarWrapperValAccesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
