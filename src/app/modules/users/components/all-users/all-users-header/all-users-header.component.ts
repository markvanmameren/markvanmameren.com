import { Component, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../../../../../core/services/auth/auth.service';
import { IUser } from '../../../../../shared/interfaces/user.interface';

@Component({
  selector: 'pf-all-users-header',
  templateUrl: './all-users-header.component.html',
  styleUrls: ['./all-users-header.component.scss'],
})
export class AllUsersHeaderComponent {
  @Input() searchTerm$!: BehaviorSubject<string>;
  @Input() users$!: Observable<IUser[]>;

  public loggedInAdmin$ = this.authService.loggedInAdmin$;

  // icons
  public faPlus = faPlus;

  constructor(private authService: AuthService) {}

  public onSearchTermChange(input: string): void {
    this.searchTerm$.next(input);
  }
}
