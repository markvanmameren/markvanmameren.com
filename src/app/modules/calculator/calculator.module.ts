import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { CalculatorComponent } from './calculator-page/calculator/calculator.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { calculatorReducer } from './state/calculator.reducer';

@NgModule({
  declarations: [CalculatorComponent, CalculatorPageComponent],
  imports: [
    SharedModule,
    CalculatorRoutingModule,
    StoreModule.forFeature('calculator', calculatorReducer),
  ],
})
export class CalculatorModule {}
