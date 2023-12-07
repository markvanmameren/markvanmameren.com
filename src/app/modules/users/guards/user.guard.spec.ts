import { TestBed } from '@angular/core/testing';
import { convertToParamMap, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { mockMultipleUsers } from '../../../testing/mockdata/user/multiple-users.mock';
import { getUsersServiceSuccessSpy } from '../../../testing/spies/services/users-success.service.spy';
import { UsersService } from '../services/users.service';

import { UserGuard } from './user.guard';

describe('UserGuard', () => {
  let usersServiceSpy: jasmine.SpyObj<UsersService>;

  let guard: UserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: UsersService, useFactory: getUsersServiceSuccessSpy },
      ],
    });
    guard = TestBed.inject(UserGuard);
    usersServiceSpy = TestBed.inject(
      UsersService
    ) as jasmine.SpyObj<UsersService>;
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  it('should return redirect if no id is provided', (done) => {
    const emptyParamMap = convertToParamMap({});
    const ActivatedRouteSnapshot = jasmine.createSpyObj(
      'ActivatedRouteSnapshot',
      {},
      { paramMap: emptyParamMap }
    );
    guard.canActivate(ActivatedRouteSnapshot).subscribe((canActivate) => {
      expect(canActivate).toBeInstanceOf(UrlTree);
      expect(canActivate.toString?.()).toBe('/all-users');
      done();
    });
  });

  it('should return true id matches any user', (done) => {
    const paramMapWithRealId = convertToParamMap({
      id: mockMultipleUsers[0].id,
    });
    const ActivatedRouteSnapshot = jasmine.createSpyObj(
      'ActivatedRouteSnapshot',
      {},
      { paramMap: paramMapWithRealId }
    );
    guard.canActivate(ActivatedRouteSnapshot).subscribe((result) => {
      expect(result).toBe(true);
      done();
    });
  });

  it('should return redirect if id does not match any user', (done) => {
    usersServiceSpy.userById$.and.returnValue(of(undefined));

    const paramMapWithWrongId = convertToParamMap({ id: 'non existing id' });
    const ActivatedRouteSnapshot = jasmine.createSpyObj(
      'ActivatedRouteSnapshot',
      {},
      { paramMap: paramMapWithWrongId }
    );
    guard.canActivate(ActivatedRouteSnapshot).subscribe((canActivate) => {
      expect(canActivate).toBeInstanceOf(UrlTree);
      expect(canActivate.toString?.()).toBe('/all-users');
      done();
    });
  });
});
