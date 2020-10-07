import { ModelDynComponent } from './../../models/dyn-component.model';
import { FakeHttpDynControlsService } from './../fake-http-dyn-controls/fake-http-dyn-controls.service';
import { Observable } from 'rxjs';
import { map, tap, share, filter } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Injectable, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { minDateValidator } from '../../validators/min-date.validator';
import { maxDateValidator } from '../../validators/max-date.validator';
import { betweenDateValidator } from '../../validators/between-date.validator';

@Injectable({
  providedIn: 'root'
})
export class GenerateControlsService {

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _cfProvider: FakeHttpDynControlsService,
    private ref: ApplicationRef
  ) { }
  generate(formInstance: FormGroup, domPlace: ViewContainerRef): Observable<ModelDynComponent[]> {

    return this._cfProvider.queryControls()
      .pipe(
        map((df: ModelDynComponent[]) => {
          for (const model of df) {
            console.log(model);
            const newFc = new FormControl(model.defaultValue);
            // если есть исходный код, то надо его исполнить
            newFc.valueChanges
              .pipe(
                filter(() => model.sourceCode.length > 0)
              )
              .subscribe(() => {
                const f = new Function(model.sourceCode);
                f(newFc, formInstance);
              });
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
