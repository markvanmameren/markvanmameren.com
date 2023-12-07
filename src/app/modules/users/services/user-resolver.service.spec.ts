import { TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { getUsersServiceSuccessSpy } from '../../../testing/spies/services/users-success.service.spy';

import { UserResolver } from './user-resolver.service';
import { UsersService } from './users.service';

describe('UserResolver', () => {
  let service: UserResolver;

  let usersServiceSpy: jasmine.SpyObj<UsersService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: UsersService, useFactory: getUsersServiceSuccessSpy },
      ],
    });
    service = TestBed.inject(UserResolver);
    usersServiceSpy = TestBed.inject(
      UsersService
    ) as jasmine.SpyObj<UsersService>;
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call userservice userById$ with the id from the activatedRouteSnapshot', () => {
    const mockParamMap = convertToParamMap({ id: '99' });
    const mockRoute = jasmine.createSpyObj(
      'ActivatedRouteSnapshot',
      {},
      { paramMap: mockParamMap }
    );

    service.resolve(mockRoute);

    expect(usersServiceSpy.userById$).toHaveBeenCalledOnceWith('99');
  });
});
