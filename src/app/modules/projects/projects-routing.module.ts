import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent, title: 'Projects' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProjectsRoutingModule {}
