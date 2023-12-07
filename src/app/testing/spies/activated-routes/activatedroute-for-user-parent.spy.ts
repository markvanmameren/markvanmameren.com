import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { mockSingleUser } from '../../mockdata/user/single-user.mock';

export const getActivatedRouteForUserParentSpy =
  (): jasmine.SpyObj<ActivatedRoute> =>
    jasmine.createSpyObj(
      'activatedRoute',
      {},
      {
        data: of({
          user: mockSingleUser,
        }),
      }
    );
