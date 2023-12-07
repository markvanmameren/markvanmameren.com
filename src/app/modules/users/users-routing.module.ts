import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UserComponent } from './components/user/user.component';
import { ViewUserComponent } from './components/user/view-user/view-user.component';
import { UserGuard } from './guards/user.guard';
import { UserResolver } from './services/user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AllUsersComponent,
    title: 'All Users',
  },
  {
    path: 'add',
    component: AddUserComponent,
    title: 'Add New User',
  },
  {
    path: ':id',
    canActivate: [UserGuard],
    resolve: { user: UserResolver },
    runGuardsAndResolvers: 'always',
    component: UserComponent,
    title: 'User Details',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'view',
        outlet: 'action',
      },
      {
        path: 'view',
        component: ViewUserComponent,
        outlet: 'action',
      },
      {
        path: 'edit',
        component: EditUserComponent,
        outlet: 'action',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UsersRoutingModule {}
