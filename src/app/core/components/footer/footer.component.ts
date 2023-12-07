import { Component } from '@angular/core';
import {
  faCommentDots,
  faCopyright,
  faEnvelope,
  faMap,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // icons
  public faCopyright = faCopyright;
  public faCommentDots = faCommentDots;
  public faEnvelope = faEnvelope;
  public faMap = faMap;
}
