import { FakeHttpDynControlsService } from './../../services/fake-http-dyn-controls/fake-http-dyn-controls.service';
import { ModelDynComponent } from './../../models/dyn-component.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { EnumDynTypes } from '../../enums/dynamic.types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
// import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-cf-form',
  templateUrl: './cf-form.component.html',
  styleUrls: ['./cf-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CfFormComponent implements OnInit {
  typesOption: SelectItem[] = [
    { label: 'calendar', value: EnumDynTypes.CALENDAR },
    { label: 'calendar period', value: EnumDynTypes.CALENDAR_PERIOD },
    { label: 'dropdown', value: EnumDynTypes.DROPDOWN },
    { label: 'iput_text', value: EnumDynTypes.INPUT_TEXT },
  ];
  editorOptions = { theme: 'vs-dark', language: 'typescript' };
  form: FormGroup;
  defSourceCode = 'const [control, form] = [...arguments];\nform.patchValue({"city_one":3});';

  focusSelected = false;
  hoverSelected = false;
  constructor(
    private _fb: FormBuilder,
    private _ref: DynamicDialogRef,
    private _config: DynamicDialogConfig,
    private _fakeHttp: FakeHttpDynControlsService,
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const data = this._config.data;
    const model = data.model as ModelDynComponent;
    this.form = this._fb.group({
      id: [model.id ? model.id : Math.floor(Math.random() * Math.floor(60))],
      name: [model.name],
      type: [model.type || 'input_text'],
      label: [model.label],
      sourceCode: [model.sourceCode.length ? model.sourceCode : this.defSourceCode],
      sourceCodeFocus: [''],
      sourceCodeHover: ['']
    });

    this.form.valueChanges
      .subscribe(d => {
        console.log(d);

      });
  }
  save(): void {
    this._ref.close(this.form.value);
  }
  cancel(): void {
    this._ref.close();
  }
  onChange({ index }): void {
    if (index === 1) {
      setTimeout(() => {
        this.focusSelected = true;
        this._cd.detectChanges();

      }, 1000);
    }
    if (index === 2) {
      setTimeout(() => {
        this.hoverSelected = true;
        this._cd.detectChanges();

      }, 1000);
    }
  }

}
