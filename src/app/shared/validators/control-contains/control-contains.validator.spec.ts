import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { controlContainsValidator } from './control-contains.validator';

describe('controlContainsValidator', () => {
  const firstName = 'Mark';
  const lastName = 'van Mameren';
  const expectedError = {
    controlContains: 'Input is containing data from other inputs',
  };
  let validatorFn: ValidatorFn;
  let controlToCheck: FormControl;
  let firstNameControl: FormControl;
  let lastNameControl: FormControl;
  let form: FormGroup;

  beforeEach(() => {
    controlToCheck = new FormControl();
    firstNameControl = new FormControl(firstName);
    lastNameControl = new FormControl(lastName);
    validatorFn = controlContainsValidator(controlToCheck, [
      firstNameControl,
      lastNameControl,
    ]);
    form = new FormGroup(
      [controlToCheck, firstNameControl, lastNameControl],
      [validatorFn]
    );
  });

  it('should return error if password contains first name', () => {
    const passwordContainingFirstName = `abc${firstName}123`;
    controlToCheck.setValue(passwordContainingFirstName);

    const result = validatorFn(form);

    expect(result).toEqual(expectedError);
  });

  it('should return error if password contains last name', () => {
    const passwordContainingLastName = `def${lastName}456`;
    controlToCheck.setValue(passwordContainingLastName);

    const result = validatorFn(form);

    expect(result).toEqual(expectedError);
  });

  it('should return null if password does not contain name', () => {
    const passwordCorrect = 'qwerty123';
    controlToCheck.setValue(passwordCorrect);

    const result = validatorFn(form);

    expect(result).toBeNull();
  });
});
