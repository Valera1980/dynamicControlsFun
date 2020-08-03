import { FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
export interface ICfComponentWrapper {
    value: any;
    label: string;
    control: FormControl;
    options?: SelectItem[];
    outsideDirty: boolean;
    isRequired(): boolean;
}
