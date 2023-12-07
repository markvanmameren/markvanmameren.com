import { FormControl, FormGroup } from '@angular/forms';
import { IRegisterFormValue } from './registerform-value.interface';

export interface IRegisterFormGroup extends FormGroup {
  value: IRegisterFormValue;
  controls: {
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    passwordConfirm: FormControl<string>;
  };
}
