import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'pf-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent {
  public loggedInAdmin$ = this.authService.loggedInAdmin$;

  // icons
  public faUser = faUser;
  public faRightFromBracket = faRightFromBracket;

  constructor(private authService: AuthService, private router: Router) {}

  public login(): void {
    this.router.navigate(['/login']);
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
