import { Component } from '@angular/core';
import { certificates, employers, schools } from './resume.content';

@Component({
  selector: 'pf-resume',
  templateUrl: './resume.component.html',
})
export class ResumeComponent {
  public employers = employers;
  public schools = schools;
  public certificates = certificates;
}
