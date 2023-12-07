import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth/auth.guard';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: MyProfileComponent,
    title: 'My Profile',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MyProfileRoutingModule {}
