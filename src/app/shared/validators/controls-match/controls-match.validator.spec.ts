import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { controlsMatchValidator } from './controls-match.validator';

describe('controlsMatchValidator', () => {
  let validatorFn: ValidatorFn;
  let control1: FormControl;
  let control2: FormControl;
  let form: FormGroup;
  const expectedError = { matchError: 'Inputs do not match' };

  beforeEach(() => {
    control1 = new FormControl('password');
    control2 = new FormControl();
    validatorFn = controlsMatchValidator(control1, control2);
    form = new FormGroup([control1, control2], [validatorFn]);
  });

  it('should return error if controls do not match', () => {
    control2.setValue('another password');

    const result = validatorFn(form);

    expect(result).toEqual(expectedError);
  });

  it('should return null if controls match', () => {
    control2.setValue('password');

    const result = validatorFn(form);

    expect(result).toBeNull();
  });
});
