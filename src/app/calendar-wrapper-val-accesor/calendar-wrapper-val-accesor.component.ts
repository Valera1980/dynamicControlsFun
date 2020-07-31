import { Component, OnInit, forwardRef, ChangeDetectionStrategy, Input } from '@angular/core';
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

  private _value: any;
  @Input() label = 'none';

  constructor() { }

  ngOnInit(): void { }

  onChange = (v: any) => { };

  // initialization
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }

  set value(v: any) {
    this._value = v;
    this.onChange(v);
  }
  get value(): any {
    return this._value;
  }

}
