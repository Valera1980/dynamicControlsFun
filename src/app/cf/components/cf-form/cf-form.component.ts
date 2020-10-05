import { FakeHttpDynControlsService } from './../../services/fake-http-dyn-controls/fake-http-dyn-controls.service';
import { ModelDynComponent } from './../../models/dyn-component.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EnumDynTypes } from '../../enums/dynamic.types';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
// import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-cf-form',
  templateUrl: './cf-form.component.html',
  styleUrls: ['./cf-form.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CfFormComponent implements OnInit {
  typesOption: SelectItem[] = [
    { label: 'calendar', value: EnumDynTypes.CALENDAR },
    { label: 'calendar period', value: EnumDynTypes.CALENDAR_PERIOD },
    { label: 'dropdown', value: EnumDynTypes.DROPDOWN },
  ];
  editorOptions = { theme: 'vs-dark', language: 'typescript' };
  // code = 'function x() {\nconsole.log("Hello world!");\n}';
  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _ref: DynamicDialogRef,
    private _fakeHttp: FakeHttpDynControlsService
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      name: [''],
      type: ['calendar'],
      label: [''],
      sourceCode: ['const [form, ref] = [...arguments];form.patchValue({"city_one":3});']
    });

    this.form.valueChanges
      .subscribe(d => {
        // console.log(d);

      });
  }
  save(): void {
    this._ref.close(this.form.value);
  }
  cancel(): void {
    this._ref.close();
  }

}
