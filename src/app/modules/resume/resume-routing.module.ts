import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: '', component: ResumeComponent, title: 'Resumé' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ResumeRoutingModule {}
