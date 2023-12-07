import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordGridContainerComponent } from './word-grid-container.component';

describe('WordGridContainerComponent', () => {
  let component: WordGridContainerComponent;
  let fixture: ComponentFixture<WordGridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordGridContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
