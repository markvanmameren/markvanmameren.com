import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { getAuthServiceErrorSpy } from '../../../testing/spies/services/auth-error.service.spy';
import { getAuthServiceSuccessSpy } from '../../../testing/spies/services/auth-success.spy.service';
import { AuthService } from '../../services/auth/auth.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: AuthService, useFactory: getAuthServiceSuccessSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  it('should create', () => {
    guard = TestBed.inject(AuthGuard);

    expect(guard).toBeTruthy();
  });

  it('should return true if admin is logged in', (done) => {
    guard = TestBed.inject(AuthGuard);

    guard.canActivate().subscribe((canActivate) => {
      expect(canActivate).toBe(true);
      done();
    });
  });

  it('should return a redirect if admin is not logged in', (done) => {
    TestBed.overrideProvider(AuthService, {
      useFactory: getAuthServiceErrorSpy,
    });
    guard = TestBed.inject(AuthGuard);

    guard.canActivate().subscribe((canActivate) => {
      expect(canActivate).toBeInstanceOf(UrlTree);
      expect(canActivate.toString?.()).toBe('/login');
      done();
    });
  });
});
