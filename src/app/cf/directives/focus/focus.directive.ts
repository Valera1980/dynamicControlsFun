import { FormControl } from '@angular/forms';
import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { getSourceOrDefault } from '../../utils/source.util';
import { TEventsArray } from '../../enums/events';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit {

  @Input() control: FormControl;
  @Input() scripts: TEventsArray;
  private _script: string;
  constructor() { }
  ngOnInit(): void {
    this._script = getSourceOrDefault('focus', this.scripts);
  }
  @HostListener('focus')
  onFocus(): void {
    if (this._script.length) {
      const fun = new Function(this._script);
      fun(this.control, this.control.parent);
    }
  }

}
