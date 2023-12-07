import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { combineLatestWith } from 'rxjs';
import { mockMultipleUsers } from '../../../../testing/mockdata/user/multiple-users.mock';
import { getUsersServiceSuccessSpy } from '../../../../testing/spies/services/users-success.service.spy';
import { UsersService } from '../../services/users.service';

import { AllUsersComponent } from './all-users.component';

describe('AllUsersComponent', () => {
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;

  let usersServiceSpy: jasmine.SpyObj<UsersService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllUsersComponent],
      providers: [
        { provide: UsersService, useFactory: getUsersServiceSuccessSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AllUsersComponent);
    component = fixture.componentInstance;

    usersServiceSpy = TestBed.inject(
      UsersService
    ) as jasmine.SpyObj<UsersService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('users$', () => {
    it('should get the users from the users service', (done) => {
      // users$ is filled by the usersServiceSpy

      component.users$
        .pipe(combineLatestWith(usersServiceSpy.users$))
        .subscribe(([usersFromComponent, userFromSpy]) => {
          expect(usersFromComponent).toEqual(userFromSpy);
          done();
        });
    });

    it('should not filter users if no searchTerm is entered', (done) => {
      // users$ is filled by the usersServiceSpy

      component.searchTerm$.next('');

      component.users$
        .pipe(combineLatestWith(usersServiceSpy.users$))
        .subscribe(([usersFromComponent, userFromSpy]) => {
          expect(usersFromComponent).toEqual(userFromSpy);
          done();
        });
    });

    it('should filter users if searchTerm is entered', (done) => {
      // users$ is filled by the usersServiceSpy

      const mockUserFullName = `${mockMultipleUsers[1].firstName} ${mockMultipleUsers[1].lastName}`;
      component.searchTerm$.next(mockUserFullName);

      component.users$
        .pipe(combineLatestWith(usersServiceSpy.users$))
        .subscribe(([usersFromComponent, userFromSpy]) => {
          expect(usersFromComponent.length).toBeLessThan(userFromSpy.length);
          expect(usersFromComponent).toEqual([mockMultipleUsers[1]]);
          done();
        });
    });
  });
});
