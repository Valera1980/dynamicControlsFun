import { FakeHttpDynControlsService } from './../cf/services/fake-http-dyn-controls/fake-http-dyn-controls.service';
import { GenerateControlsService } from './../cf/services/generate-controls/generate-controls.service';
import { ModelDynComponent } from './../cf/models/dyn-component.model';
import { Component, OnInit, ViewChild, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { filter, takeUntil } from 'rxjs/operators';
import { setCustomFieldsAsDirty } from '../cf/utils/cf';
import { OpenModalCfService } from '../cf/services/open-modal-cf/open-modal-cf.service';
import { DialogService } from 'primeng/dynamicdialog';
import { generateId } from '../cf/utils/id.generator';
import { TEventsArray } from '../cf/enums/events';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService]
})
export class ReactFormComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject();
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
  ngOnDestroy(): void {
    this._destroy$.next();
  }
  initForm(): void {
    this.form = this._fb.group({
      name: 'someName',
      email: 'some_email',
      dynamic: this._fb.group({})
    });
    this._genControl.generate(this.dynamic, this.domPlace)
      .pipe(
        takeUntil(this._destroy$)
      )
      .subscribe((df) => {
        this.df = df;
        this.init = false;
        this._cd.detectChanges();
      });

    this.form.valueChanges
      .pipe(
        filter(() => !this.init),
        takeUntil(this._destroy$))
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
  createNewCf(): void {
    const ref = this._openModal.add();
    // listen close result
    ref.onClose
      .pipe(
        filter(d => !!d),
        takeUntil(this._destroy$)
      )
      .subscribe(d => {
        const m = new ModelDynComponent({
          id: generateId(),
          name: d.name,
          label: d.label,
          scripts: [
            { event: 'change', source: d.sourceCode },
            { event: 'focus', source: d.sourceCodeFocus },
            { event: 'mouseover', source: d.sourceCodeHover },
          ]
        });
        this._fakeHttp.addControl(m);
      });
  }
  edit(m: ModelDynComponent): void {
    const ref = this._openModal.edit(m.clone());
    ref.onClose
      .pipe(
        filter(d => !!d),
        takeUntil(this._destroy$)
      )
      .subscribe(d => {
        const index = this.df.findIndex(currModel => currModel.id === d.id);
        const scripts: TEventsArray = [
          { event: 'change', source: d.sourceCode },
          { event: 'focus', source: d.sourceCodeFocus },
          { event: 'mouseover', source: d.sourceCodeHover }
        ];
        const newModel = new ModelDynComponent({ ...this.df[index].serialize(), ...d, ...{ scripts } });
        this.df[index] = newModel;
        this._cd.detectChanges();
      });
  }

}
