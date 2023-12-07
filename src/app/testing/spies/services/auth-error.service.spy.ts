import { of } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ResponseEnum } from '../../../shared/enums/response.enum';

export const getAuthServiceErrorSpy = (): jasmine.SpyObj<AuthService> =>
  jasmine.createSpyObj(
    'AuthService',
    {
      login$: of(ResponseEnum.ERROR),
      register$: of(ResponseEnum.ERROR),
      logout: undefined,
    },
    {
      loggedInAdmin$: of(null),
    }
  );
