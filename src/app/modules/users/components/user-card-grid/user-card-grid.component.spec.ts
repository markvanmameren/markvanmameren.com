import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardGridComponent } from './user-card-grid.component';

describe('UserCardGridComponent', () => {
  let component: UserCardGridComponent;
  let fixture: ComponentFixture<UserCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
