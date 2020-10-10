import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ICfComponentWrapper } from '../../models/custom-field.component.intreface';
import { SelectItem } from 'primeng/api';
import { IValidator } from '../../models/validator.model';
import { TEventsArray } from '../../enums/events';

@Component({
  selector: 'app-input-wrapper-val-accessor',
  templateUrl: './input-wrapper-val-accessor.component.html',
  styleUrls: ['./input-wrapper-val-accessor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputWrapperValAccessorComponent),
      multi: true
    }
  ],
})
export class InputWrapperValAccessorComponent implements OnInit, ControlValueAccessor, ICfComponentWrapper {

  private _value: string;

  @Input() label: string;
  @Input() control: FormControl;
  @Input() options?: SelectItem<any>[];
  @Input() outsideDirty: boolean;
  @Input() validators: IValidator[];
  @Input() scripts: TEventsArray = [];

  constructor(
    private _cd: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
  }
  onChange = (v: any) => { };
  onTouch = (v: any) => { };
  isRequired(): boolean {
    return this.control.errors && this.control.errors.required;
  }

  writeValue(v: string): void {
    this._value = v;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  set value(v: string) {
    this._value = v;
  }
  get value(): string {
    return this._value;
  }
  get dirty(): boolean {
    return this.control.dirty;
  }
  isValid(): boolean {
    return !this.control.errors;
  }
  getError(): string {
    if (this.control.errors) {
      const [first] = Object.keys(this.control.errors);
      const validator = this.validators.find(v => v.type === first);
      return validator.message;
    }
    return '';
  }
}
