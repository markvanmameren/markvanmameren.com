import { of } from 'rxjs';
import { ContactformService } from '../../../modules/contact/services/contactform/contactform.service';
import { ResponseEnum } from '../../../shared/enums/response.enum';

export const getContactformErrorServiceSpy =
  (): jasmine.SpyObj<ContactformService> =>
    jasmine.createSpyObj('ContactformService', {
      postForm$: of(ResponseEnum.ERROR),
    });
