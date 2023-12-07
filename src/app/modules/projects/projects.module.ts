import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [ProjectsRoutingModule, SharedModule],
})
export class ProjectsModule {}
