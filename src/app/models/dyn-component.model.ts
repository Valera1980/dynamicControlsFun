import { TDynTypes } from './../enums/dynamic.types';

export class ModelDynComponent {
    readonly id: number;
    readonly name: string;
    readonly type: TDynTypes;
    readonly label: string;
    constructor({
        id = 0,
        name = '',
        type = 'calendar',
        label = ''
    }: { id?: number, name?: string, type?: TDynTypes, label?: string } = {}) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.label = label;
    }
}
