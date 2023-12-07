import { of } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ResponseEnum } from '../../../shared/enums/response.enum';
import { mockSingleAdmin } from '../../mockdata/admin/single-admin.mock';

export const getAuthServiceSuccessSpy = (): jasmine.SpyObj<AuthService> =>
  jasmine.createSpyObj(
    'AuthService',
    {
      login$: of(ResponseEnum.SUCCESS),
      register$: of(ResponseEnum.SUCCESS),
      logout: undefined,
    },
    {
      loggedInAdmin$: of(mockSingleAdmin),
    }
  );
