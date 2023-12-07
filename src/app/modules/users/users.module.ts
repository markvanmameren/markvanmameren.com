import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersHeaderComponent } from './components/all-users/all-users-header/all-users-header.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { BackToAllUsersComponent } from './components/back-to-all-users/back-to-all-users.component';
import { UserCardGridComponent } from './components/user-card-grid/user-card-grid.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserToolbarComponent } from './components/user-toolbar/user-toolbar.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UserComponent } from './components/user/user.component';
import { ViewUserComponent } from './components/user/view-user/view-user.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    AllUsersComponent,
    AddUserComponent,
    ViewUserComponent,
    AllUsersHeaderComponent,
    UserToolbarComponent,
    UserCardComponent,
    UserCardGridComponent,
    EditUserComponent,
    BackToAllUsersComponent,
    UserComponent,
  ],
  imports: [UsersRoutingModule, SharedModule],
})
export class UsersModule {}
