import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { getAuthServiceSuccessSpy } from '../../../../testing/spies/services/auth-success.spy.service';

import { BackToAllUsersComponent } from './back-to-all-users.component';

describe('BackToAllUsersComponent', () => {
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  let component: BackToAllUsersComponent;
  let fixture: ComponentFixture<BackToAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule, RouterTestingModule],
      declarations: [BackToAllUsersComponent],
      providers: [
        { provide: AuthService, useFactory: getAuthServiceSuccessSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BackToAllUsersComponent);
    component = fixture.componentInstance;

    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
