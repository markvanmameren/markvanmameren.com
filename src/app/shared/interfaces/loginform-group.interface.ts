import { FormControl, FormGroup } from '@angular/forms';
import { IAdmin } from './admin.interface';

export interface ILoginFormGroup extends FormGroup {
  value: IAdmin;
  controls: {
    email: FormControl<string>;
    password: FormControl<string>;
  };
}
