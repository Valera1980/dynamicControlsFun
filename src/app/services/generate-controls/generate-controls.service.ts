import { CalendarWrapperComponent } from './../../calendar-wrapper/calendar-wrapper.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { toUTC } from 'src/app/utils/date-time';

@Injectable({
  providedIn: 'root'
})
export class GenerateControlsService {

  constructor(
    private _resolver: ComponentFactoryResolver
  ) { }
  generate(formInstance: FormGroup, domPlace: ViewContainerRef): void {

    const factory = this._resolver.resolveComponentFactory(CalendarWrapperComponent);
    const ref = domPlace.createComponent(factory);
    ref.instance.name = 'date';
    ref.instance.formInstance = formInstance;
    const utcTime = toUTC(new Date());
    console.log(' ================ this is utcTime ===================');
    console.log(utcTime);
    const newFc = new FormControl(new Date());
    formInstance.addControl('date', newFc);
    ref.instance.writeValue(utcTime);

  }
}
