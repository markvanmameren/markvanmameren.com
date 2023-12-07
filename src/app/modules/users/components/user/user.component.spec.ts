import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { mockSingleUser } from '../../../../testing/mockdata/user/single-user.mock';
import { getActivatedRouteForUserParentSpy } from '../../../../testing/spies/activated-routes/activatedroute-for-user-parent.spy';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let activatedRouteForUserParentSpy: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UserComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useFactory: getActivatedRouteForUserParentSpy,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;

    activatedRouteForUserParentSpy = TestBed.inject(
      ActivatedRoute
    ) as jasmine.SpyObj<ActivatedRoute>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map the user from the activated route', (done) => {
    component.user$.subscribe((user) => expect(user).toEqual(mockSingleUser));
    done();
  });
});
