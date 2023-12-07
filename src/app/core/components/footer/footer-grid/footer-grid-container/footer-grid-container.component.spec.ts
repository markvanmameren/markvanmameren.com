import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGridContainerComponent } from './footer-grid-container.component';

describe('FooterGridContainerComponent', () => {
  let component: FooterGridContainerComponent;
  let fixture: ComponentFixture<FooterGridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterGridContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
