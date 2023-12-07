import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { mockAdminLoginEntryCorrect } from '../../../../testing/mockdata/admin/admin-login-entry-correct.mock';
import { mockAdminLoginEntryWrong } from '../../../../testing/mockdata/admin/admin-login-entry-wrong.mock';
import { getAuthServiceSuccessSpy } from '../../../../testing/spies/services/auth-success.spy.service';
import { getRouterSpy } from '../../../../testing/spies/services/router.spy';
import { ResponseEnum } from '../../../enums/response.enum';

import { LoginformComponent } from './loginform.component';

describe('LoginformComponent', () => {
  let component: LoginformComponent;
  let fixture: ComponentFixture<LoginformComponent>;

  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginformComponent],
      providers: [
        { provide: AuthService, useFactory: getAuthServiceSuccessSpy },
        { provide: Router, useFactory: getRouterSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginformComponent);
    component = fixture.componentInstance;

    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture.detectChanges();
  });

  describe('creation', () => {
    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    it('should create FormControls', () => {
      expect(component.email).toBeInstanceOf(FormControl);
      expect(component.password).toBeInstanceOf(FormControl);
    });

    it('should create FormGroup', () => {
      expect(component.form).toBeInstanceOf(FormGroup);
    });
  });

  describe('onSubmit', () => {
    it('should not call login$ on AuthService if form is invalid', () => {
      component.form = jasmine.createSpyObj(
        'form',
        {},
        { value: mockAdminLoginEntryCorrect, valid: false }
      );

      component.onSubmit();

      expect(authServiceSpy.login$).not.toHaveBeenCalled();
    });

    it('should show invalid credentials error if form is invalid', () => {
      component.form = jasmine.createSpyObj(
        'form',
        {},
        { value: mockAdminLoginEntryCorrect, valid: false }
      );

      component.onSubmit();

      expect(component.isInvalidCredentials).toBe(true);
    });

    it('should show invalid credentials error if login on authservice failed', () => {
      authServiceSpy.login$.and.returnValue(of(ResponseEnum.ERROR));

      component.form = jasmine.createSpyObj(
        'form',
        {},
        { value: mockAdminLoginEntryWrong, valid: true }
      );

      component.onSubmit();

      expect(component.isInvalidCredentials).toBe(true);
    });

    it('should call login$ on AuthService if form is valid', () => {
      component.form.setValue(mockAdminLoginEntryCorrect);
      component.onSubmit();

      expect(authServiceSpy.login$).toHaveBeenCalledOnceWith(
        mockAdminLoginEntryCorrect
      );
    });

    it('should navigate to my-profile after successfully logging in', () => {
      component.form.setValue(mockAdminLoginEntryCorrect);

      component.onSubmit();

      expect(routerSpy.navigate).toHaveBeenCalledOnceWith(['/my-profile']);
    });
  });
});
