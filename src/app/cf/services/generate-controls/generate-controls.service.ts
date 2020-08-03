import { ModelDynComponent } from './../../models/dyn-component.model';
import { FakeHttpDynControlsService } from './../fake-http-dyn-controls/fake-http-dyn-controls.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { minDateValidator } from '../../validators/min-date.validator';
import { maxDateValidator } from '../../validators/max-date.validator';
import { betweenDateValidator } from '../../validators/between-date.validator';

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
    if (!m.validators.length) {
      return control;
    }
    const validators = [];
    for (const v of m.validators) {

      switch (v.type) {
        case 'required':
          validators.push(Validators.required);
          break;
        case 'min':
          validators.push(Validators.min(v.value));
          break;
        case 'minDate':
          validators.push(minDateValidator(v.value));
          break;
        case 'maxDate':
          validators.push(maxDateValidator(v.value));
          break;
        case 'betweenDate':
          validators.push(betweenDateValidator(v.value));
          break;
        default:
          break;
      }
    }
    control.setValidators(validators);
    return control;
  }
}
