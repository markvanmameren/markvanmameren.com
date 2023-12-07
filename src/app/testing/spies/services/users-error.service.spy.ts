import { of } from 'rxjs';
import { UsersService } from '../../../modules/users/services/users.service';
import { ResponseEnum } from '../../../shared/enums/response.enum';
import { IUser } from '../../../shared/interfaces/user.interface';

export const getUsersServiceErrorSpy = (): jasmine.SpyObj<UsersService> =>
  jasmine.createSpyObj(
    'UsersService',
    {
      userById$: of(undefined),
      addUser$: of(ResponseEnum.ERROR),
      updateUser$: of(ResponseEnum.ERROR),
      deleteUser$: of(ResponseEnum.ERROR),
    },
    {
      users$: of([] as IUser[]),
    }
  );
