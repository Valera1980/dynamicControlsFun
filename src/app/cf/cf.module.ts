import { DynComponentPlaceComponent } from './components/dyn-component-place/dyn-component-place.component';
import { DropdownWrapperValAccesorComponent } from './components/dropdown-wrapper-val-accesor/dropdown-wrapper-val-accesor.component';
import { CalendarWrapperValAccesorComponent } from './components/calendar-wrapper-val-accesor/calendar-wrapper-val-accesor.component';
import { PeriodWrapperValAccesorComponent } from './components/period-wrapper-val-accesor/period-wrapper-val-accesor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { AdressWrapperValAccesorComponent } from './components/adress-wrapper-val-accesor/adress-wrapper-val-accesor.component';



@NgModule({
  declarations: [
    CalendarWrapperValAccesorComponent,
    DropdownWrapperValAccesorComponent,
    PeriodWrapperValAccesorComponent,
    DynComponentPlaceComponent,
    AdressWrapperValAccesorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    DropdownModule,
    ProgressSpinnerModule,
    ButtonModule
  ],
  exports: [
    CalendarWrapperValAccesorComponent,
    DropdownWrapperValAccesorComponent,
    PeriodWrapperValAccesorComponent,
    DynComponentPlaceComponent,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    DropdownModule,
    ProgressSpinnerModule,
    ButtonModule
  ]
})
export class CfModule { }
