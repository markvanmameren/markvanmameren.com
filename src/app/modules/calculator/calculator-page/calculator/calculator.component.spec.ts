import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { ModifierEnum } from '../../enums/modifier.enum';
import { clear, setModifier, setNumber } from '../../state/calculator.actions';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let calculatorStoreSpy: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      providers: [{ provide: Store, useValue: storeSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;

    calculatorStoreSpy = TestBed.inject(Store) as jasmine.SpyObj<Store>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setModifier', () => {
    it('should dispatch setModifier action after selecting modifier ', () => {
      const modifier = ModifierEnum.Multiply;

      component.setModifier(modifier);

      expect(calculatorStoreSpy.dispatch).toHaveBeenCalledOnceWith(
        setModifier({ modifier })
      );
    });
  });

  describe('setNumber', () => {
    it('should dispatch setNumber1 action after first entry after selecting number', () => {
      const number = 3;

      component.setNumber(number);

      expect(calculatorStoreSpy.dispatch).toHaveBeenCalledOnceWith(
        setNumber({ number })
      );
    });
  });

  describe('clear', () => {
    it('should dispatch clear action after selecting cleaer', () => {
      component.clear();

      expect(calculatorStoreSpy.dispatch).toHaveBeenCalledOnceWith(clear());
    });
  });
});
