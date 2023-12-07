import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    title: 'Contact',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ContactRoutingModule {}
