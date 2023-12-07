import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { WordGridCellComponent } from './word-grid-cell.component';

describe('WordGridCellComponent', () => {
  let component: WordGridCellComponent;
  let fixture: ComponentFixture<WordGridCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule],
      declarations: [WordGridCellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordGridCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
