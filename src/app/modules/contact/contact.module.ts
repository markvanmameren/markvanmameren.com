import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contactform/contactform.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [ContactRoutingModule, SharedModule],
})
export class ContactModule {}
