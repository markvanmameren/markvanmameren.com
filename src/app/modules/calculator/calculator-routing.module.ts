import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';

const routes: Routes = [
  {
    path: '',
    component: CalculatorPageComponent,
    title: 'Calculator',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CalculatorRoutingModule {}
