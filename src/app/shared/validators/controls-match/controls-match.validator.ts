import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const controlsMatchValidator =
  (control1: AbstractControl, control2: AbstractControl): ValidatorFn =>
  (): ValidationErrors | null =>
    control1.value !== control2.value
      ? { matchError: 'Inputs do not match' }
      : null;
