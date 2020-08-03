import { GenerateControlsService } from './../cf/services/generate-controls/generate-controls.service';
import { ModelDynComponent } from './../cf/models/dyn-component.model';
import { Component, OnInit, ViewChild, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { setCustomFieldsAsDirty } from '../cf/utils/cf';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactFormComponent implements OnInit {

  @ViewChild('domPlace', { read: ViewContainerRef, static: true }) domPlace: ViewContainerRef;

  dateControl = new FormControl();

  dynFieldsIsReady = false;
  df: ModelDynComponent[];
  init = true;

  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _genControl: GenerateControlsService,
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.form = this._fb.group({
      name: 'someName',
      email: 'some_email',
      dynamic: this._fb.group({})
    });
    this._genControl.generate(this.dynamic, this.domPlace)
      .subscribe((df) => {
        this.df = df;
        this.init = false;
        this._cd.detectChanges();
      });

    this.form.valueChanges
      .pipe(filter(() => !this.init))
      .subscribe(data => {
        console.log(data);
      });

    this.dateControl.valueChanges
      .subscribe(d => {
        console.log(d);
      });
  }

  get dynamic(): FormGroup {
    return this.form.get('dynamic') as FormGroup;
  }
  save(): void {
    setCustomFieldsAsDirty(this.form);
    this._cd.detectChanges();
  }

}
