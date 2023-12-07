import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { getAuthServiceSuccessSpy } from '../../../../testing/spies/services/auth-success.spy.service';
import { getRouterSpy } from '../../../../testing/spies/services/router.spy';
import { AuthService } from '../../../services/auth/auth.service';

import { HeaderAdminComponent } from './header-admin.component';

describe('HeaderAdminComponent', () => {
  let component: HeaderAdminComponent;
  let fixture: ComponentFixture<HeaderAdminComponent>;

  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule],
      declarations: [HeaderAdminComponent],
      providers: [
        { provide: AuthService, useFactory: getAuthServiceSuccessSpy },
        { provide: Router, useFactory: getRouterSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderAdminComponent);
    component = fixture.componentInstance;

    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login', () => {
    it('should navigate to login', () => {
      component.login();

      expect(routerSpy.navigate).toHaveBeenCalledOnceWith(['/login']);
    });
  });

  describe('logout', () => {
    it('should call authservice logout', () => {
      component.logout();
      expect(authServiceSpy.logout).toHaveBeenCalledTimes(1);
    });

    it('should navigate to homepage after logging out', () => {
      component.logout();
      expect(routerSpy.navigate).toHaveBeenCalledOnceWith(['/']);
    });
  });
});
