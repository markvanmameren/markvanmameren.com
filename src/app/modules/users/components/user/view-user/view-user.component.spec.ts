import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { mockSingleUser } from '../../../../../testing/mockdata/user/single-user.mock';
import { getActivatedRouteForUserChildSpy } from '../../../../../testing/spies/activated-routes/activatedroute-for-user-child.spy';

import { ViewUserComponent } from './view-user.component';

describe('ViewUserComponent', () => {
  let component: ViewUserComponent;
  let fixture: ComponentFixture<ViewUserComponent>;

  let activatedRouteForUserChildSpy: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ViewUserComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useFactory: getActivatedRouteForUserChildSpy,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewUserComponent);
    component = fixture.componentInstance;

    activatedRouteForUserChildSpy = TestBed.inject(
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
