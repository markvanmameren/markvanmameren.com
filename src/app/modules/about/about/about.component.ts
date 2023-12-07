import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronDown,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { skills } from '../../resume/components/resume/resume.content';

@Component({
  selector: 'pf-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public skills = skills;

  // icons
  public faChevronDown = faChevronDown;
  public faLinkedin = faLinkedin;
  public faGithub = faGithub;
  public faEnvelope = faEnvelope;
  public faPhone = faPhone;

  public scrollTo(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
