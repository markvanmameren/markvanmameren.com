import { ModifierEnum } from '../enums/modifier.enum';

export interface ICalculatorState {
  lastResult: number | null;
  modifier: ModifierEnum | null;
}
