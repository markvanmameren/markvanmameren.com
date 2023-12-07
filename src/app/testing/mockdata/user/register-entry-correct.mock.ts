import { IRegisterFormValue } from '../../../shared/interfaces/registerform-value.interface';
import { mockSingleUser } from './single-user.mock';

export const mockRegisterEntryCorrect: IRegisterFormValue = {
  firstName: mockSingleUser.firstName,
  lastName: mockSingleUser.lastName,
  email: mockSingleUser.email,
  password: mockSingleUser.password,
  passwordConfirm: mockSingleUser.password,
};
