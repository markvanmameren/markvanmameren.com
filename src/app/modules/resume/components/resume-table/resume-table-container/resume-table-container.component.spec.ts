import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTableContainerComponent } from './resume-table-container.component';

describe('ResumeTableContainerComponent', () => {
  let component: ResumeTableContainerComponent;
  let fixture: ComponentFixture<ResumeTableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeTableContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
