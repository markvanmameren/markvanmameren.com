import { of } from 'rxjs';
import { UsersService } from '../../../modules/users/services/users.service';
import { ResponseEnum } from '../../../shared/enums/response.enum';
import { mockMultipleUsers } from '../../mockdata/user/multiple-users.mock';
import { mockSingleUser } from '../../mockdata/user/single-user.mock';

export const getUsersServiceSuccessSpy = (): jasmine.SpyObj<UsersService> =>
  jasmine.createSpyObj(
    'UsersService',
    {
      userById$: of(mockSingleUser),
      addUser$: of(ResponseEnum.SUCCESS),
      updateUser$: of(ResponseEnum.SUCCESS),
      deleteUser$: of(ResponseEnum.SUCCESS),
    },
    {
      users$: of(mockMultipleUsers),
    }
  );
