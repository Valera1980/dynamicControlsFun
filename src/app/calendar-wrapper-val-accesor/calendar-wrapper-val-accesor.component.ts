import { ICfComponentWrapper } from './../models/custom-field.component.intreface';
import { Component, OnInit, forwardRef, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

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
export class CalendarWrapperValAccesorComponent implements OnInit, ControlValueAccessor, ICfComponentWrapper, OnChanges {

  private _value: [Date, Date];
  @Input() control: FormControl;
  @Input() label = 'none';
  @Input() defaultValue: any;
  @Input() outsideDirty: boolean;

  constructor() { }
  
  ngOnInit(): void { }

  ngOnChanges({outsideDirty}: SimpleChanges): void {
    if (outsideDirty.currentValue === true) {
      this.control.markAsDirty();
    }
  } 

  onChange = (v: any) => { };
  onTouch = (v: any) => { };

  // initialization
  writeValue(obj: string | Date): void {

    if (typeof obj === 'string') {
      this.value = new Date(obj);
    } else {
      this.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void { }

  set value(v: any) {
    this._value = v;
    this.onChange(v);
    this.onTouch(v);
  }
  get value(): any {
    return this._value;
  }
  get dirty(): boolean {
    return this.control.dirty;
  }
  isRequired(): boolean {
    return this.control.errors && this.control.errors.required;
  }
  isValid(): boolean {
    return !this.control.errors;
  }
}
