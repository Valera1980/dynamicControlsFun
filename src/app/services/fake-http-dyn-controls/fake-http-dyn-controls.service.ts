import { ModelDynComponent } from './../../models/dyn-component.model';
import { Injectable } from '@angular/core';
import { Observable, of, Observer, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpDynControlsService {

  df$ = new ReplaySubject<ModelDynComponent[]>(1);

  constructor() { }

  queryControls(): Observable<ModelDynComponent[]> {
    const arr = [
      new ModelDynComponent({ id: 1, name: 'date_one', type: 'calendar'  , label: 'Claendar one' }),
      new ModelDynComponent({ id: 2, name: 'date_two', type: 'calendar'  , label: 'Claendar two' }),
      new ModelDynComponent({ id: 3, name: 'date_three', type: 'calendar', label: 'Claendar three' }),
      new ModelDynComponent({ id: 4, name: 'date_four', type: 'calendar' , label: 'Claendar four' }),
      new ModelDynComponent({ id: 5, name: 'date_five', type: 'calendar' , label: 'Claendar five' }),
    ];
    return new Observable((o: Observer<ModelDynComponent[]>) => {
      setTimeout(() => {
        o.next(arr);
        o.complete();
      }, 2000);
    });
  }
}
