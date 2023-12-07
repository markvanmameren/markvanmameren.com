import { Component } from '@angular/core';
import { projects } from './projects.content';

@Component({
  selector: 'pf-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects = projects;
}
