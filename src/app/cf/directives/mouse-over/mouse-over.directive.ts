import { FormControl } from '@angular/forms';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {
   @Input() control: FormControl;
  constructor() { }
  @HostListener('mouseover')
  onMouseover(): void {
    console.log('mouseover');
    console.log(this.control);
  }
}
