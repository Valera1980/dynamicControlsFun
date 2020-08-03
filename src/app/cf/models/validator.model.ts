import { TValidators } from '../enums/validators.enum';
export interface IValidator {
    type: TValidators;
    value: any;
    message: string;
}
