import { FormControl, FormGroup } from '@angular/forms';
import { IContactFormValue } from './contactform-value.interface';

export interface IContactFormGroup extends FormGroup {
  value: IContactFormValue;
  controls: {
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    email: FormControl<string>;
    message: FormControl<string>;
  };
}
