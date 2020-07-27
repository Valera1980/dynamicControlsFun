import { GenerateControlsService } from '../services/generate-controls/generate-controls.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { toLocal } from '../utils/date-time';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {

  @ViewChild('domPlace', { read: ViewContainerRef, static: true }) domPlace: ViewContainerRef;

  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _genControl: GenerateControlsService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    // для упрощения все будет синхронно
    this.form = this._fb.group({
      name: 'someName',
      email: 'some_email',
      dynamic: this._fb.group({})
    });
    this._genControl.generate(this.dynamic, this.domPlace);

    setTimeout(() => {
      // this.dynamic.get('date').patchValue(toLocal(new Date(2019, 3, 29, 3, 4)));
    }, 2000);

    this.form.valueChanges
      .subscribe(data => {
        console.log(data);
      });
  }

  get dynamic(): FormGroup {
    return this.form.get('dynamic') as FormGroup;
  }

}
