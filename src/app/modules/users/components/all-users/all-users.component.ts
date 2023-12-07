import { Component } from '@angular/core';
import { BehaviorSubject, combineLatestWith, map } from 'rxjs';
import { IUser } from '../../../../shared/interfaces/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'pf-all-users',
  templateUrl: './all-users.component.html',
})
export class AllUsersComponent {
  public searchTerm$ = new BehaviorSubject('');
  public users$ = this.usersService.users$.pipe(
    combineLatestWith(this.searchTerm$),
    map(([users, searchTerm]) => this.filterUsers(users, searchTerm))
  );

  constructor(private usersService: UsersService) {}

  private filterUsers = (users: IUser[], searchTerm: string): IUser[] =>
    users.filter(({ firstName, lastName }) =>
      `${firstName} ${lastName}`
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );
}
