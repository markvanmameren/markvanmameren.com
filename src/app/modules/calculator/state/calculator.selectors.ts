import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICalculatorState } from '../interfaces/calculator.state.interface';

const getCalculatorFeature =
  createFeatureSelector<ICalculatorState>('calculator');

export const getModifier = createSelector(
  getCalculatorFeature,
  ({ modifier }) => modifier
);

export const getLastResult = createSelector(
  getCalculatorFeature,
  ({ lastResult }) => lastResult
);
