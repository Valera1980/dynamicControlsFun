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
    readonly validators: IValidator[];
    readonly sourceCode: string;
}

export class ModelDynComponent implements IDynComponent {
    readonly defaultValue: any;
    readonly id: number;
    readonly label: string;
    readonly name: string;
    readonly type: TDynTypes;
    readonly options?: SelectItem[];
    readonly validators: IValidator[];
    readonly sourceCode: string;

    constructor({
        defaultValue = null,
        id = 0,
        label = '',
        name = '',
        type = 'calendar',
        options = [],
        validators = [],
        sourceCode = ''
    }: Partial<IDynComponent> = {}) {
        this.defaultValue = defaultValue;
        this.id = id;
        this.label = label;
        this.name = name;
        this.type = type;
        this.options = Array.isArray(options) ? options : [];
        this.validators = validators;
        this.sourceCode = sourceCode;
    }
}
