import { ModelDynComponent } from './../../models/dyn-component.model';
import { FakeHttpDynControlsService } from './../fake-http-dyn-controls/fake-http-dyn-controls.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

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
            const newFc = new FormControl(model.defaultValue);
            const newFcWithValidators = this._addValidators(newFc, model);
            formInstance.addControl(model.name, newFcWithValidators);
          }
          return df;
        })
      );
  }
  private _addValidators(control: FormControl, m: ModelDynComponent): FormControl {
    if (!m.validators) {
      return control;
    }
    switch (m.validators.type) {
      case 'required':
        control.setValidators(Validators.required);
        break;
      case 'min':
        control.setValidators(Validators.min(m.validators.value));
        break;
      default:
        break;
    }

    return control;
  }
}