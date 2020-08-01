import { ICfComponentWrapper } from './../models/custom-field.component.intreface';
import { Component, OnInit, forwardRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dropdown-wrapper-val-accesor',
  templateUrl: './dropdown-wrapper-val-accesor.component.html',
  styleUrls: ['./dropdown-wrapper-val-accesor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownWrapperValAccesorComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownWrapperValAccesorComponent implements OnInit, ControlValueAccessor, ICfComponentWrapper {

  private _value: any;
  @Input() label: string;
  @Input() control: FormControl;
  @Input() options: SelectItem[];

  constructor() { }


  ngOnInit(): void {
  }

  onChange = (v: any) => { };
  onTouch = (v: any) => { };

  writeValue(v: any): void {
    this._value = v;
   }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }
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
}
