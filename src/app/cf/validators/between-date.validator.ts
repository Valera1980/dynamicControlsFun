import { ValidatorFn, AbstractControl } from '@angular/forms';
import { isAfter, isBefore } from '../utils/date-time';
export function betweenDateValidator(dateIntreval: [Date, Date]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const controlDate = control.value;
    if (!control.value) {
      return { required: true };
    }
    if (!isAfter(controlDate[0], dateIntreval[0]) && !isBefore(controlDate[1], dateIntreval[1])) {
      return null;
    }
    return { betweenDate: true };
  };
}
