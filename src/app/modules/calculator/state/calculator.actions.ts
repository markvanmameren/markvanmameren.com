import { createAction, props } from '@ngrx/store';
import { ModifierEnum } from '../enums/modifier.enum';

export const setNumber = createAction(
  '[Calculator] Set Number',
  props<{ number: number }>()
);

export const setModifier = createAction(
  '[Calculator] Set Modifier',
  props<{ modifier: ModifierEnum }>()
);

export const clear = createAction('[Calculator] Clear');
