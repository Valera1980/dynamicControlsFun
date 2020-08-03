import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { IValidator } from './validator.model';
export interface ICfComponentWrapper {
    value: any;
    label: string;
    control: FormControl;
    options?: SelectItem[];
    outsideDirty: boolean;
    validators: IValidator[];
    isRequired(): boolean; // наверное уже не нужен, так как  есть валидатор required
}
