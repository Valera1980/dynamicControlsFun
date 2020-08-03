import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ModelDynComponent } from '../../models/dyn-component.model';
import { EnumDynTypes } from '../../enums/dynamic.types';

@Component({
  selector: 'app-dyn-component-place',
  templateUrl: './dyn-component-place.component.html',
  styleUrls: ['./dyn-component-place.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynComponentPlaceComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() components: ModelDynComponent[];

  dynTypes = EnumDynTypes;

  constructor() { }

  ngOnInit(): void {
  }

}
