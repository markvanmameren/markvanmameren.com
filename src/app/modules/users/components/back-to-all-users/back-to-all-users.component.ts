import { Component } from '@angular/core';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pf-back-to-all-users',
  templateUrl: './back-to-all-users.component.html',
  styleUrls: ['./back-to-all-users.component.scss'],
})
export class BackToAllUsersComponent {
  // icons
  public faArrowLeftLong = faArrowLeftLong;
}
