import { ModelDynComponent } from './../../models/dyn-component.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpDynControlsService {

  constructor() { }

  queryControls(): Observable<ModelDynComponent[]> {
    return of([
      new ModelDynComponent({ id: 1, name: 'date', type: 'calendar' })
    ]);
  }
}
