import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewriterBoxComponent } from './typewriter-box.component';

describe('TypewriterBoxComponent', () => {
  let component: TypewriterBoxComponent;
  let fixture: ComponentFixture<TypewriterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypewriterBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypewriterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
