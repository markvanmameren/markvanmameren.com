import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { ImageGridCellComponent } from './image-grid-cell.component';

describe('ImageGridCellComponent', () => {
  let component: ImageGridCellComponent;
  let fixture: ComponentFixture<ImageGridCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule],
      declarations: [ImageGridCellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageGridCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
