import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ResumeTableContainerComponent } from './components/resume-table/resume-table-container/resume-table-container.component';
import { ResumeTableRowComponent } from './components/resume-table/resume-table-row/resume-table-row.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ResumeRoutingModule } from './resume-routing.module';

@NgModule({
  declarations: [
    ResumeComponent,
    ResumeTableContainerComponent,
    ResumeTableRowComponent,
  ],
  imports: [ResumeRoutingModule, SharedModule],
})
export class ResumeModule {}
