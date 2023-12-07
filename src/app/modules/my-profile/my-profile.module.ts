import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';

@NgModule({
  declarations: [MyProfileComponent],
  imports: [MyProfileRoutingModule, SharedModule],
})
export class MyProfileModule {}
