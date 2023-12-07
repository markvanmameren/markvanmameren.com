import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ModalService } from '../../../core/services/modal/modal.service';
import { mockRegisterEntryCorrect } from '../../../testing/mockdata/user/register-entry-correct.mock';
import { getAuthServiceSuccessSpy } from '../../../testing/spies/services/auth-success.spy.service';
import { getModalServiceSpy } from '../../../testing/spies/services/modal.service.spy';
import { ResponseEnum } from '../../enums/response.enum';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let modalServiceSpy: jasmine.SpyObj<ModalService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [
        { provide: AuthService, useFactory: getAuthServiceSuccessSpy },
        { provide: ModalService, useFactory: getModalServiceSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;

    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    modalServiceSpy = TestBed.inject(
      ModalService
    ) as jasmine.SpyObj<ModalService>;

    fixture.detectChanges();
  });

  describe('creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('onSubmit', () => {
    it('should register user to AuthService', () => {
      const { passwordConfirm, ...expectedNewUser } = mockRegisterEntryCorrect;

      component.onSubmit(mockRegisterEntryCorrect);

      expect(authServiceSpy.register$).toHaveBeenCalledOnceWith(
        expectedNewUser
      );
    });

    it('should show success-modal if register was successful on authService', () => {
      component.onSubmit(mockRegisterEntryCorrect);

      expect(modalServiceSpy.showModal).toHaveBeenCalledOnceWith(
        jasmine.objectContaining({ titleText: 'Success' })
      );
    });

    it('should show error-modal if register was NOT successful on authService', () => {
      authServiceSpy.register$.and.returnValue(of(ResponseEnum.ERROR));

      component.onSubmit(mockRegisterEntryCorrect);

      expect(modalServiceSpy.showModal).toHaveBeenCalledOnceWith(
        jasmine.objectContaining({ titleText: 'Oops...' })
      );
    });
  });
});
