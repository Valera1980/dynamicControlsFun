import { IValidator } from './validator.model';
import { TDynTypes } from './../enums/dynamic.types';
import { SelectItem } from 'primeng/api';
export interface IDynComponent {
    readonly defaultValue: any;
    readonly id: number;
    readonly label: string;
    readonly name: string;
    readonly type: TDynTypes;
    readonly options?: SelectItem[];
    // readonly isRequired: boolean;
    readonly validators: IValidator;
}

export class ModelDynComponent implements IDynComponent {
    readonly defaultValue: any;
    readonly id: number;
    readonly label: string;
    readonly name: string;
    readonly type: TDynTypes;
    readonly options?: SelectItem[];
    // readonly isRequired: boolean;
    readonly validators: IValidator;
    constructor({
        defaultValue = null,
        id = 0,
        label = '',
        name = '',
        type = 'calendar',
        options = [],
        // isRequired = false,
        validators = null
    }: Partial<IDynComponent> = {}) {
        this.defaultValue = defaultValue;
        this.id = id;
        this.label = label;
        this.name = name;
        this.type = type;
        this.options = Array.isArray(options) ? options : [];
        // this.isRequired = isRequired;
        this.validators = validators;
    }
}
