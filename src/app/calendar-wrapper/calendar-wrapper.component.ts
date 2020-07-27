import { Component, OnInit, forwardRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup } from '@angular/forms';
import { toLocal, toUTC} from '../utils/date-time';

@Component({
  selector: 'app-calendar-wrapper',
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarWrapperComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarWrapperComponent implements OnInit, ControlValueAccessor {
  private _value: any;
  @Input() name: string;
  @Input() formInstance: FormGroup;
  constructor() { }
  ngOnInit(): void {
  }
  onChange: any = () => { };
  onTouch: any = () => { };
  writeValue(value: any): void {
   
    const localTime = toLocal(value);
    console.log('============== this is local time ================================');
    console.log(localTime);
    this._value = localTime;
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }
  set value(v: any) {
    console.log(v);
    this._value = v;
    this.onChange(this._value);
    this.onTouch(this._value);
  }
  get value(): any {
    return this._value;
  }
}
