import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { mockSingleUser } from '../../mockdata/user/single-user.mock';

export const getActivatedRouteForUserChildSpy =
  (): jasmine.SpyObj<ActivatedRoute> =>
    jasmine.createSpyObj(
      'activatedRoute',
      {},
      {
        parent: {
          data: of({
            user: mockSingleUser,
          }),
        },
      }
    );
