import { TDynTypes } from './../enums/dynamic.types';

export class ModelDynComponent {
    readonly id: number;
    readonly name: string;
    readonly type: TDynTypes;
    constructor({
        id = 0,
        name = '',
        type = 'calendar'
    }: { id?: number, name?: string, type?: TDynTypes } = {}) {
       this.id = id;
       this.name = name;
       this.type = type;
    }
}