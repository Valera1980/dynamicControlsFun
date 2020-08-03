import { ModelDynComponent } from './../../models/dyn-component.model';
import { Injectable } from '@angular/core';
import { Observable, of, Observer, ReplaySubject } from 'rxjs';
import { toUTC, addDays } from 'src/app/utils/date-time';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpDynControlsService {

  constructor() { }

  queryControls(): Observable<ModelDynComponent[]> {
    const arr = [
      new ModelDynComponent({
        id: 1,
        name: 'city_one',
        type: 'dropdown',
        label: 'city',
        defaultValue: null,
        options: [{ label: 'Select City', value: null },
        { label: 'New York', value: 1 },
        { label: 'Rome', value: 2 },
        { label: 'London', value: 3 },
        { label: 'Istanbul', value: 4 },
        { label: 'Paris', value: 5 }],
        validators: { type: 'required', value: null, message: 'this required field' }
      }),
      new ModelDynComponent({
        id: 2,
        name: 'date_two',
        type: 'calendar',
        label: 'Calendar two',
        defaultValue: toUTC(new Date()),
        validators: { type: 'min', value: new Date(), message: 'min validation fail' }
      }),
      new ModelDynComponent({
        id: 3,
        name: 'date_three',
        type: 'calendar_period',
        label: 'Calendar with period',
        defaultValue: [toUTC(new Date()), addDays(new Date(), 7)]
      }),
      new ModelDynComponent({
        id: 4,
        name: 'date_four',
        type: 'calendar',
        label: 'Calendar four',
      }),
      // new ModelDynComponent({
      //   id: 5,
      //   name: 'date_five',
      //   type: 'calendar',
      //   label: 'Calendar five'
      // }),
    ];
    return new Observable((o: Observer<ModelDynComponent[]>) => {
      setTimeout(() => {
        o.next(arr);
        o.complete();
      }, 2000);
    });
  }
}
