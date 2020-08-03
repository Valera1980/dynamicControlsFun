import { ICfComponentWrapper } from './../models/custom-field.component.intreface';
import { Component, OnInit, forwardRef, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, Validators } from '@angular/forms';
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
export class DropdownWrapperValAccesorComponent implements OnInit, ControlValueAccessor, ICfComponentWrapper, OnChanges {

  private _value: number;
  @Input() label: string;
  @Input() control: FormControl;
  @Input() options: SelectItem[];
  @Input() outsideDirty: boolean;

  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges({ outsideDirty }: SimpleChanges): void {
    if (outsideDirty.currentValue === true) {
      this.control.markAsDirty();
    }
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
  set value(v: number) {
    this._value = v;
    this.onChange(v);
    this.onTouch(v);
  }
  get value(): number {
    return this._value;
  }
  get dirty(): boolean {
    return this.control.dirty;
  }
  get touched(): boolean {
    return this.control.touched;
  }
  isRequired(): boolean {
    return this.control.errors && this.control.errors.required;
  }
  isValid(): boolean {
    return !this.control.errors;
  }
}
