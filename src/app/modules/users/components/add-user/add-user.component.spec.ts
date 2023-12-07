import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ModalService } from '../../../../core/services/modal/modal.service';
import { ResponseEnum } from '../../../../shared/enums/response.enum';
import { mockRegisterEntryCorrect } from '../../../../testing/mockdata/user/register-entry-correct.mock';
import { getModalServiceSpy } from '../../../../testing/spies/services/modal.service.spy';
import { getUsersServiceSuccessSpy } from '../../../../testing/spies/services/users-success.service.spy';
import { UsersService } from '../../services/users.service';

import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  let usersServiceSpy: jasmine.SpyObj<UsersService>;
  let modalServiceSpy: jasmine.SpyObj<ModalService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: UsersService, useFactory: getUsersServiceSuccessSpy },
        { provide: ModalService, useFactory: getModalServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;

    usersServiceSpy = TestBed.inject(
      UsersService
    ) as jasmine.SpyObj<UsersService>;
    modalServiceSpy = TestBed.inject(
      ModalService
    ) as jasmine.SpyObj<ModalService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should show loader', () => {
      component.onSubmit(mockRegisterEntryCorrect);

      expect(modalServiceSpy.showLoader).toHaveBeenCalledTimes(1);
    });

    it('should hide loader', () => {
      component.onSubmit(mockRegisterEntryCorrect);

      expect(modalServiceSpy.hideModal).toHaveBeenCalledTimes(1);
    });

    it('should post user to UsersService', () => {
      const { passwordConfirm, ...expectedNewUser } = mockRegisterEntryCorrect;

      component.onSubmit(mockRegisterEntryCorrect);

      expect(usersServiceSpy.addUser$).toHaveBeenCalledOnceWith(
        expectedNewUser
      );
    });

    it('should show submit-error if add-user was unsuccesful on the usersService', () => {
      usersServiceSpy.addUser$.and.returnValue(of(ResponseEnum.ERROR));

      component.onSubmit(mockRegisterEntryCorrect);

      expect(component.isSubmitError).toBe(true);
    });

    it('should NOT show submit-error if add-user was succesful on the usersService', () => {
      component.onSubmit(mockRegisterEntryCorrect);

      expect(component.isSubmitError).toBe(false);
    });

    it('should show success-modal if add-user was succesful on the usersService', () => {
      component.onSubmit(mockRegisterEntryCorrect);

      expect(modalServiceSpy.showModal).toHaveBeenCalledOnceWith(
        jasmine.objectContaining({ titleText: 'Success' })
      );
    });
  });
});
