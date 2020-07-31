import { ModelDynComponent } from './../../models/dyn-component.model';
import { FakeHttpDynControlsService } from './../fake-http-dyn-controls/fake-http-dyn-controls.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalendarWrapperComponent } from './../../calendar-wrapper/calendar-wrapper.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { toUTC, toLocal } from 'src/app/utils/date-time';

@Injectable({
  providedIn: 'root'
})
export class GenerateControlsService {

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _cfProvider: FakeHttpDynControlsService
  ) { }
  generate(formInstance: FormGroup, domPlace: ViewContainerRef): Observable<ModelDynComponent[]> {

    return this._cfProvider.queryControls()
      .pipe(
        map((df: ModelDynComponent[]) => {
          for (const model of df) {
            const utcTime = toUTC(new Date());
            const newFc = new FormControl(toLocal(utcTime));
            formInstance.addControl(model.name, newFc);
          }
          return df;
        })
      );
  }
}
