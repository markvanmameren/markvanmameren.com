import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../shared/components/login/login.component';
import { RegisterComponent } from '../shared/components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Log-in' },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CoreRoutingModule {}
