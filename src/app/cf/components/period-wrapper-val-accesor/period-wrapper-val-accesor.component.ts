import { IValidator } from './../../models/validator.model';
import { ICfComponentWrapper } from './../../models/custom-field.component.intreface';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, Input, forwardRef, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-period-wrapper-val-accesor',
  templateUrl: './period-wrapper-val-accesor.component.html',
  styleUrls: ['./period-wrapper-val-accesor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PeriodWrapperValAccesorComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeriodWrapperValAccesorComponent implements OnInit, ControlValueAccessor, ICfComponentWrapper, OnChanges {

  private _value: any;
  @Input() control: FormControl;
  @Input() label = 'none';
  @Input() defaultValue: any;
  @Input() outsideDirty: boolean;
  @Input() validators: IValidator[];
  constructor() { }

  ngOnInit(): void { }

  ngOnChanges({ outsideDirty }: SimpleChanges): void {
    if (outsideDirty.currentValue === true) {
      this.control.markAsDirty();
    }
  }

  onChange = (v: any) => { };
  onTouch = (v: any) => { };

  // initialization
  writeValue(obj: string[] | Date[]): void {

    if (typeof obj[0] === 'string' && typeof obj[1] === 'string') {
      this.value = [new Date(obj[0]), new Date(obj[1])];
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
  getError(): string {
    console.log(this.control.errors);
    if (this.control.errors) {
      const [first] = Object.keys(this.control.errors);
      const validator = this.validators.find(v => v.type === first);
      return validator.message;
    }
    return '';
  }
}
