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
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { OpenModalCfService } from './services/open-modal-cf/open-modal-cf.service';
import { CfFormComponent } from './components/cf-form/cf-form.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { InputWrapperValAccessorComponent } from './components/input-wrapper-val-accessor/input-wrapper-val-accessor.component';
import { FocusDirective } from './directives/focus/focus.directive';
import { MouseOverDirective } from './directives/mouse-over/mouse-over.directive';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    CalendarWrapperValAccesorComponent,
    DropdownWrapperValAccesorComponent,
    PeriodWrapperValAccesorComponent,
    DynComponentPlaceComponent,
    CfFormComponent,
    InputWrapperValAccessorComponent,
    FocusDirective,
    MouseOverDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    DropdownModule,
    ProgressSpinnerModule,
    ButtonModule,
    DynamicDialogModule,
    MonacoEditorModule,
    TabViewModule
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
  ],
  providers: [
    OpenModalCfService,
    DialogService
  ]
})
export class CfModule { }
