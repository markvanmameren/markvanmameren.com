import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ModalService } from '../../../../../core/services/modal/modal.service';
import { ResponseEnum } from '../../../../../shared/enums/response.enum';
import { IUser } from '../../../../../shared/interfaces/user.interface';
import { mockRegisterEntryCorrect } from '../../../../../testing/mockdata/user/register-entry-correct.mock';
import { mockSingleUser } from '../../../../../testing/mockdata/user/single-user.mock';
import { getActivatedRouteForUserChildSpy } from '../../../../../testing/spies/activated-routes/activatedroute-for-user-child.spy';
import { getModalServiceSpy } from '../../../../../testing/spies/services/modal.service.spy';
import { getUsersServiceSuccessSpy } from '../../../../../testing/spies/services/users-success.service.spy';
import { UsersService } from '../../../services/users.service';

import { EditUserComponent } from './edit-user.component';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  let activatedRouteForUserChildSpy: jasmine.SpyObj<ActivatedRoute>;
  let usersServiceSpy: jasmine.SpyObj<UsersService>;
  let modalServiceSpy: jasmine.SpyObj<ModalService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditUserComponent],
      providers: [
        { provide: UsersService, useFactory: getUsersServiceSuccessSpy },
        { provide: ModalService, useFactory: getModalServiceSpy },
        {
          provide: ActivatedRoute,
          useFactory: getActivatedRouteForUserChildSpy,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;

    usersServiceSpy = TestBed.inject(
      UsersService
    ) as jasmine.SpyObj<UsersService>;
    modalServiceSpy = TestBed.inject(
      ModalService
    ) as jasmine.SpyObj<ModalService>;
    activatedRouteForUserChildSpy = TestBed.inject(
      ActivatedRoute
    ) as jasmine.SpyObj<ActivatedRoute>;

    fixture.detectChanges();
  });

  describe('creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should map the user from the activated route', (done) => {
      activatedRouteForUserChildSpy.parent!.data.subscribe(({ user }) => {
        expect(component.user).toEqual(user);
        done();
      });
    });
  });

  describe('setUser', () => {
    it('should set the current user', () => {
      component.setUser(mockSingleUser);

      expect(component.user).toEqual(mockSingleUser);
    });
    it('should set the intial formvalue', () => {
      component.setUser(mockSingleUser);

      expect(component.initialFormValue).toEqual({
        firstName: mockSingleUser.firstName,
        lastName: mockSingleUser.lastName,
        email: mockSingleUser.email,
        password: mockSingleUser.password,
        passwordConfirm: mockSingleUser.password,
      });
    });
  });

  describe('onSubmit', () => {
    it('should show loader', () => {
      component.onSubmit(mockRegisterEntryCorrect);

      expect(modalServiceSpy.showLoader).toHaveBeenCalledTimes(1);
    });

    it('should update user in UsersService', () => {
      component.user = mockSingleUser;
      let expectedNewUser: IUser = {
        id: mockSingleUser.id,
        firstName: mockRegisterEntryCorrect.firstName,
        lastName: mockRegisterEntryCorrect.lastName,
        email: mockRegisterEntryCorrect.email,
        password: mockRegisterEntryCorrect.password,
      };

      component.onSubmit(mockRegisterEntryCorrect);

      expect(usersServiceSpy.updateUser$).toHaveBeenCalledOnceWith(
        expectedNewUser
      );
    });

    it('should show success-modal if the user was succesfully updated in the usersService', () => {
      component.onSubmit(mockRegisterEntryCorrect);

      expect(modalServiceSpy.showModal).toHaveBeenCalledOnceWith(
        jasmine.objectContaining({ titleText: 'Success' })
      );
    });

    it('should show error-modal if an error occured while updating the user in the usersService', () => {
      usersServiceSpy.updateUser$.and.returnValue(of(ResponseEnum.ERROR));

      component.onSubmit(mockRegisterEntryCorrect);

      expect(modalServiceSpy.showModal).toHaveBeenCalledOnceWith(
        jasmine.objectContaining({ titleText: 'Error' })
      );
    });
  });
});
