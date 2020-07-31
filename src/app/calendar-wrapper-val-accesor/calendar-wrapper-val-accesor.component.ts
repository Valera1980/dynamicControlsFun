import { Component, OnInit, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-calendar-wrapper-val-accesor',
  templateUrl: './calendar-wrapper-val-accesor.component.html',
  styleUrls: ['./calendar-wrapper-val-accesor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarWrapperValAccesorComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarWrapperValAccesorComponent implements OnInit, ControlValueAccessor {

  

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    
  }
  registerOnChange(fn: any): void {
    
  }
  registerOnTouched(fn: any): void {
    
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }


}
