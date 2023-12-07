import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGridContainerComponent } from './image-grid-container.component';

describe('ImageGridContainerComponent', () => {
  let component: ImageGridContainerComponent;
  let fixture: ComponentFixture<ImageGridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageGridContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
