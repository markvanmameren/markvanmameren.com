import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { combineLatestWith, of } from 'rxjs';
import { ResponseEnum } from '../../../shared/enums/response.enum';
import { mockAdminLoginEntryCorrect } from '../../../testing/mockdata/admin/admin-login-entry-correct.mock';
import { mockAdminLoginEntryWrong } from '../../../testing/mockdata/admin/admin-login-entry-wrong.mock';
import { mockSingleAdmin } from '../../../testing/mockdata/admin/single-admin.mock';
import { mockSingleUser } from '../../../testing/mockdata/user/single-user.mock';
import { getCookieServiceSpy } from '../../../testing/spies/services/cookie.service.spy';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  let cookieServiceSpy: jasmine.SpyObj<CookieService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: CookieService, useFactory: getCookieServiceSpy }],
    });
  });

  describe('main functionality', () => {
    beforeEach(() => {
      service = TestBed.inject(AuthService);
      cookieServiceSpy = TestBed.inject(
        CookieService
      ) as jasmine.SpyObj<CookieService>;
    });

    describe('creation', () => {
      it('should create', () => {
        expect(service).toBeTruthy();
      });
      it('should be logged out on app startup', (done) => {
        service.loggedInAdmin$.subscribe((loggedInAdmin) => {
          expect(loggedInAdmin).toBeNull();
          done();
        });
      });
    });

    describe('login$', () => {
      it('should login if credentials match', (done) => {
        service
          .login$(mockAdminLoginEntryCorrect)
          .pipe(combineLatestWith(service.loggedInAdmin$))
          .subscribe(([response, loggedInAdmin]) => {
            expect(response).toBe(ResponseEnum.SUCCESS);
            expect(loggedInAdmin).toEqual(mockSingleAdmin);
            done();
          });
      });

      it('should not login if credentials do not match', (done) => {
        service
          .login$(mockAdminLoginEntryWrong)
          .pipe(combineLatestWith(service.loggedInAdmin$))
          .subscribe(([response, loggedInAdmin]) => {
            expect(response).toBe(ResponseEnum.ERROR);
            expect(loggedInAdmin).toBeNull();
            done();
          });
      });

      it('should save admin e-mail in a cookie', (done) => {
        service.login$(mockAdminLoginEntryCorrect).subscribe(() => {
          expect(cookieServiceSpy.set).toHaveBeenCalledWith(
            'PFAdmin',
            mockAdminLoginEntryCorrect.email
          );
          done();
        });
      });
    });

    describe('logout', () => {
      it('should set the logged-in admin to null', (done) => {
        service.logout();

        service.loggedInAdmin$.subscribe((loggedInAdmin) => {
          expect(loggedInAdmin).toBeNull();
          done();
        });
      });

      it('should delete the corresponding cookie', () => {
        service.logout();

        expect(cookieServiceSpy.delete).toHaveBeenCalledOnceWith('PFAdmin');
      });
    });

    describe('register$', () => {
      it('should add the new admin', (done) => {
        service.register$(mockSingleUser); // successfully registering automatically logs in
        service.logout(); // so logout before testing if login succeeds as new admin

        service
          .login$({
            email: mockSingleUser.email,
            password: mockSingleUser.password,
          })
          .subscribe((response) => {
            expect(response).toBe(ResponseEnum.SUCCESS);
            done();
          });
      });

      it('should login after adding the admin', (done) => {
        const loginSpy = spyOn(service, 'login$').and.returnValue(
          of(ResponseEnum.SUCCESS)
        );

        service.register$(mockSingleUser).subscribe((response) => {
          expect(response).toEqual(ResponseEnum.SUCCESS);
          expect(loginSpy).toHaveBeenCalledOnceWith({
            email: mockSingleUser.email,
            password: mockSingleUser.password,
          });
          done();
        });
      });
    });
  });

  describe('reading cookie', () => {
    beforeEach(() => {
      cookieServiceSpy = getCookieServiceSpy();
      TestBed.overrideProvider(CookieService, { useValue: cookieServiceSpy });
    });

    it('should not log-in if no cookie can be found', (done) => {
      cookieServiceSpy.get.and.returnValue('');

      service = TestBed.inject(AuthService); // cookie is checked in constructor

      service.loggedInAdmin$.subscribe((loggedInAdmin) => {
        expect(loggedInAdmin).toBeNull();
        done();
      });
    });

    it('should not log-in if found cookie does not match any admin credentials', (done) => {
      cookieServiceSpy.get.and.returnValue(mockAdminLoginEntryWrong.email);

      service = TestBed.inject(AuthService); // cookie is checked in constructor

      service.loggedInAdmin$.subscribe((loggedInAdmin) => {
        expect(loggedInAdmin).toBeNull();
        done();
      });
    });

    it('should log-in if found cookie matches any admin credentials', (done) => {
      cookieServiceSpy.get.and.returnValue(mockAdminLoginEntryCorrect.email);

      service = TestBed.inject(AuthService); // cookie is checked in constructor

      service.loggedInAdmin$.subscribe((admin) => {
        expect(admin).toEqual(mockSingleAdmin);
        done();
      });
    });
  });
});
