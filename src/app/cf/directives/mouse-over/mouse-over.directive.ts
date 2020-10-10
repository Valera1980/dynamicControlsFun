import { FormControl } from '@angular/forms';
import { Directive, HostListener, Input } from '@angular/core';
import { TEventsArray } from '../../enums/events';
import { getSourceOrDefault } from '../../utils/source.util';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {
  @Input() control: FormControl;
  @Input() scripts: TEventsArray;
  private _script: string;
  constructor() { }
  @HostListener('mouseover')
  onMouseover(): void {
    if (getSourceOrDefault('mouseover', this.scripts).length) {
      const fun = new Function(getSourceOrDefault('mouseover', this.scripts));
      fun(this.control, this.control.parent);
    }
  }
}
