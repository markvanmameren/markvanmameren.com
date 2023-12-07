import { CookieService } from 'ngx-cookie-service';

export const getCookieServiceSpy = (): jasmine.SpyObj<CookieService> =>
  jasmine.createSpyObj('CookieService', ['set', 'get', 'delete']);
