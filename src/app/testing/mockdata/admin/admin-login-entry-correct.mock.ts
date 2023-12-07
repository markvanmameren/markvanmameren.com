import { IAdmin } from '../../../shared/interfaces/admin.interface';
import { mockSingleAdmin } from './single-admin.mock';

export const mockAdminLoginEntryCorrect: IAdmin = {
  email: mockSingleAdmin.email,
  password: mockSingleAdmin.password,
};
