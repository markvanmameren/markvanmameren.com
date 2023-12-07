import { createReducer, on } from '@ngrx/store';
import { ModifierEnum } from '../enums/modifier.enum';
import { ICalculatorState } from '../interfaces/calculator.state.interface';
import { clear, setModifier, setNumber } from './calculator.actions';

const initialState: ICalculatorState = {
  lastResult: null,
  modifier: null,
};

export const calculatorReducer = createReducer<ICalculatorState>(
  initialState,
  on(setNumber, ({ lastResult, modifier }, { number }) => {
    let result = number;

    if (modifier && lastResult !== null) {
      switch (modifier) {
        case ModifierEnum.Plus:
          result = lastResult + number;
          break;

        case ModifierEnum.Minus:
          result = lastResult - number;
          break;

        case ModifierEnum.Multiply:
          result = lastResult * number;
          break;

        case ModifierEnum.Divide:
          result = lastResult / number;
          break;
      }
    }

    return {
      lastResult: result,
      modifier: null,
    };
  }),
  on(setModifier, (state, { modifier }) => ({
    ...state,
    modifier,
  })),
  on(clear, () => initialState)
);
