import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const controlContainsValidator =
  (
    controlToCheck: AbstractControl,
    withValuesFrom: AbstractControl[]
  ): ValidatorFn =>
  (): ValidationErrors | null =>
    withValuesFrom
      .map((control) => control.value?.toLocaleLowerCase())
      .some((valueLC) =>
        controlToCheck.value?.toLocaleLowerCase().includes(valueLC)
      )
      ? { controlContains: 'Input is containing data from other inputs' }
      : null;
