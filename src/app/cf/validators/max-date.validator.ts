import { ValidatorFn, AbstractControl } from '@angular/forms';
import { isAfter } from '../utils/date-time';
export function maxDateValidator(date: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const controlDate = control.value;
    if (isAfter(controlDate, date)) {
      return null;
    }
    return { maxDate: true };
  };
}
