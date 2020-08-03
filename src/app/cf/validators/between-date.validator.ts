import { ValidatorFn, AbstractControl } from '@angular/forms';
import { isAfter, isBefore } from '../utils/date-time';
export function betweenDateValidator(date: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    const controlDate = control.value;
    console.log(controlDate);
    console.log(date);
    if (!isAfter(controlDate, date) && !isBefore(controlDate, date)) {
      return null;
    }
    return { betweenDate: true };
  };
}
