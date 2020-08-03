import { FormGroup } from '@angular/forms';
export function setCustomFieldsAsDirty(customFields: FormGroup): void {
    (Object as any).values(customFields.controls).forEach(control => {
        if (control.controls) {
            setCustomFieldsAsDirty(control);
        } else {
            control.markAsDirty();
            control.markAsTouched();
        }
    });
}
