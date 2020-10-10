import { FormControl } from '@angular/forms';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  @Input() control: FormControl;
  @Input() scripts: FormControl;
  constructor() { }

  @HostListener('focus', ['$event.target'])
  onFocus(): void {
    // console.log('FOCUS');
    console.log(this.control);
  }

}
