import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { IValidator } from './validator.model';
import { TEventsArray } from '../enums/events';
export interface ICfComponentWrapper {
    value: any;
    label: string;
    control: FormControl;
    options?: SelectItem[];
    outsideDirty: boolean;
    validators: IValidator[];
    scripts: TEventsArray;
    isRequired(): boolean; // наверное уже не нужен, так как  есть валидатор required
}
