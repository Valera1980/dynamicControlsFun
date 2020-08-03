import { TValidators } from './../enums/validators.out-of-box.enum';
export interface IValidator {
    type: TValidators;
    value: any;
    message: string;
}
