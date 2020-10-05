import { FakeHttpDynControlsService } from './../cf/services/fake-http-dyn-controls/fake-http-dyn-controls.service';
import { GenerateControlsService } from './../cf/services/generate-controls/generate-controls.service';
import { ModelDynComponent } from './../cf/models/dyn-component.model';
import { Component, OnInit, ViewChild, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { setCustomFieldsAsDirty } from '../cf/utils/cf';
import { OpenModalCfService } from '../cf/services/open-modal-cf/open-modal-cf.service';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService]
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
    private _cd: ChangeDetectorRef,
    private _openModal: OpenModalCfService,
    private _fakeHttp: FakeHttpDynControlsService
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
      .subscribe(d => {
        console.log(d);
        // this._cd.detectChanges();
      });

    // this.dateControl.valueChanges
    //   .subscribe(d => {
    //     console.log(d);
    //   });
  }

  get dynamic(): FormGroup {
    return this.form.get('dynamic') as FormGroup;
  }
  save(): void {
    setCustomFieldsAsDirty(this.form);
    this._cd.detectChanges();
  }
  createNewCf(): void {
    const ref = this._openModal.add();
    // listen close result
    ref.onClose
      .pipe(filter(d => !!d))
      .subscribe(d => {
         const m = new ModelDynComponent({
           id: 10,
           name: d.name,
           label: d.label,
           sourceCode: d.sourceCode
         });
         this._fakeHttp.addControl(m);
      });
  }

}
