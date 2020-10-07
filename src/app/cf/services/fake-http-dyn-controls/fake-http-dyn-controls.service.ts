import { ModelDynComponent } from './../../models/dyn-component.model';
import { Injectable } from '@angular/core';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import { toLocal, toUTC, addDays } from '../../utils/date-time';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpDynControlsService {

  controls = [
    new ModelDynComponent({
      id: 15,
      name: 'input_one',
      type: 'input_text',
      label: 'тест инпут',
      defaultValue: ''
    }),
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
      validators: [{ type: 'required', value: null, message: 'This is required field' }]
    }),
    new ModelDynComponent({
      id: 2,
      name: 'date_two',
      type: 'calendar',
      label: 'Calendar two',
      defaultValue: toUTC(new Date()),
      validators: [
        { type: 'required', value: null, message: 'This is required field' },
        { type: 'maxDate', value: new Date(), message: 'Max date validation error' }
      ]
    }),
    new ModelDynComponent({
      id: 3,
      name: 'date_three',
      type: 'calendar_period',
      label: 'Calendar with period',
      defaultValue: [toUTC(new Date()), addDays(new Date(), 7)],
      validators: [
        { type: 'required', value: null, message: 'This is required field' },
        { type: 'betweenDate', value: [toUTC(new Date()), addDays(new Date(), 6)], message: 'between validation fail' }
      ],
    }),
    new ModelDynComponent({
      id: 4,
      name: 'date_four',
      type: 'calendar',
      label: 'Calendar four',
      validators: [
        { type: 'required', value: null, message: 'This is required field' },
        { type: 'minDate', value: new Date(), message: 'min validation fail' }
      ],
      defaultValue: new Date()
    })];

  controls$ = new BehaviorSubject<ModelDynComponent[]>([]);
  constructor() {
    this.controls$.next(this.controls);
  }

  queryControls(): Observable<ModelDynComponent[]> {
    return this.controls$.asObservable();
  }
  addControl(m: ModelDynComponent): void {
    this.controls.push(m);
    this.controls$.next(this.controls);
  }
}
