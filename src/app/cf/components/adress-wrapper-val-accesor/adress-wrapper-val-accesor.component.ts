import { IValidator } from './../../models/validator.model';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ICfComponentWrapper } from 'app/cf/models/custom-field.component.intreface';

@Component({
  selector: 'app-adress-wrapper-val-accesor',
  templateUrl: './adress-wrapper-val-accesor.component.html',
  styleUrls: ['./adress-wrapper-val-accesor.component.scss']
})
export class AdressWrapperValAccesorComponent implements OnInit, ControlValueAccessor, ICfComponentWrapper {

  constructor() { }
  value: any;
  label: string;
  control: FormControl;
  outsideDirty: boolean;
  validators: IValidator[];

  ngOnInit(): void {
  }

  isRequired(): boolean {
    throw new Error('Method not implemented.');
  }
  writeValue(value: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}
