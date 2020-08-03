import { AbstractControl, ValidatorFn } from '@angular/forms';
import { isBefore } from '../utils/date-time';
export function minDateValidator(date: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const controlDate = control.value;
    if (isBefore(controlDate, date)) {
      return null;
    }
    return { minDate: true };
  };
}
