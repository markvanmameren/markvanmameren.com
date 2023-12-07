import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { FooterGridCellComponent } from './footer-grid-cell.component';

describe('FooterGridCellComponent', () => {
  let component: FooterGridCellComponent;
  let fixture: ComponentFixture<FooterGridCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule],
      declarations: [FooterGridCellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterGridCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
