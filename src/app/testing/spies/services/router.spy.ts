import { NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';

export const getRouterSpy = (): jasmine.SpyObj<Router> =>
  jasmine.createSpyObj(
    'Router',
    { navigate: of(true) },
    {
      events: of(new NavigationEnd(0, '', '')),
    }
  );
