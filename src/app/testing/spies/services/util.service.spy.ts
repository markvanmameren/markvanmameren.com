import { of } from 'rxjs';
import { UtilService } from '../../../core/services/util/util.service';

export const getUtilServiceSpy = (): jasmine.SpyObj<UtilService> =>
  jasmine.createSpyObj(
    'UtilService',
    {},
    {
      isMobile$: of(false),
    }
  );
