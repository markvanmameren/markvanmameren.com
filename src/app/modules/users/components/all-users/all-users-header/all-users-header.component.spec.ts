import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { AuthService } from '../../../../../core/services/auth/auth.service';
import { getAuthServiceSuccessSpy } from '../../../../../testing/spies/services/auth-success.spy.service';

import { AllUsersHeaderComponent } from './all-users-header.component';

describe('AllUsersHeaderComponent', () => {
  let component: AllUsersHeaderComponent;
  let fixture: ComponentFixture<AllUsersHeaderComponent>;

  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule],
      declarations: [AllUsersHeaderComponent],
      providers: [
        { provide: AuthService, useFactory: getAuthServiceSuccessSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AllUsersHeaderComponent);
    component = fixture.componentInstance;

    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call next on searchTerm$ with the entered input', () => {
    const searchTermSpy = jasmine.createSpyObj('searchTerm$', ['next']);
    component.searchTerm$ = searchTermSpy;
    const testSearchTerm = 'test searchword';

    component.onSearchTermChange(testSearchTerm);

    expect(searchTermSpy.next).toHaveBeenCalledOnceWith(testSearchTerm);
  });
});
