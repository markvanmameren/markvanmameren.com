import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'pf-my-profile',
  templateUrl: './my-profile.component.html',
})
export class MyProfileComponent {
  public loggedInAdmin$ = this.authService.loggedInAdmin$;

  constructor(private authService: AuthService) {}
}
