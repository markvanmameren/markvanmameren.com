import { Component, Input } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IUser } from '../../../../shared/interfaces/user.interface';

@Component({
  selector: 'pf-user-card[user]',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: IUser;

  // icons
  public faUser = faUser;
}
