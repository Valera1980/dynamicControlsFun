import { FormControl } from '@angular/forms';
import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { TEventsArray } from '../../enums/events';
import { getSourceOrDefault } from '../../utils/source.util';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective implements OnInit {
  @Input() control: FormControl;
  @Input() scripts: TEventsArray;
  private _script: string;
  constructor() { }
  ngOnInit(): void {
    this._script = getSourceOrDefault('mouseover', this.scripts);
  }
  @HostListener('mouseover')
  onMouseover(): void {
    if (this._script.length) {
      const fun = new Function(this._script);
      fun(this.control, this.control.parent);
    }
  }
}
