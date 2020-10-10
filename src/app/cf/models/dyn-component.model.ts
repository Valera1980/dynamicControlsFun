import { TEventsArray } from './../enums/events';
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
    readonly scripts: TEventsArray;
}

export class ModelDynComponent implements IDynComponent {
    readonly defaultValue: any;
    readonly id: number;
    readonly label: string;
    readonly name: string;
    readonly type: TDynTypes;
    readonly options?: SelectItem[];
    readonly validators: IValidator[];
    readonly scripts: TEventsArray;

    constructor({
        defaultValue = null,
        id = 0,
        label = '',
        name = '',
        type = 'calendar',
        options = [],
        validators = [],
        scripts = [
            { event: 'change', source: '' },
            { event: 'click', source: '' },
            { event: 'focus', source: '' },
            { event: 'mouseover', source: '' }
        ]
    }: Partial<IDynComponent> = {}) {
        this.defaultValue = defaultValue;
        this.id = id;
        this.label = label;
        this.name = name;
        this.type = type;
        this.options = Array.isArray(options) ? options : [];
        this.validators = validators;
        this.scripts = scripts;
    }
    clone(): ModelDynComponent {
        return new ModelDynComponent(this.serialize());
    }
    serialize(): IDynComponent {
        return {
            id: this.id,
            defaultValue: this.defaultValue,
            label: this.label,
            name: this.name,
            type: this.type,
            validators: this.validators,
            options: this.options.map(o => ({ ...{}, ...o })),
            scripts: this.scripts.map(e => ({ event: e.event, source: e.source }))
        };
    }
}
