import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModifierEnum } from '../../enums/modifier.enum';
import { IAppState } from '../../interfaces/app.state.interface';
import { clear, setModifier, setNumber } from '../../state/calculator.actions';
import { getLastResult, getModifier } from '../../state/calculator.selectors';
@Component({
  selector: 'pf-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  public ModifierEnum = ModifierEnum;
  public modifier$ = this.store.select(getModifier);
  public lastResult$ = this.store.select(getLastResult);

  constructor(private store: Store<IAppState>) {}

  public setModifier(modifier: ModifierEnum): void {
    this.store.dispatch(setModifier({ modifier }));
  }

  public setNumber(number: number): void {
    this.store.dispatch(setNumber({ number }));
  }

  public clear(): void {
    this.store.dispatch(clear());
  }
}
