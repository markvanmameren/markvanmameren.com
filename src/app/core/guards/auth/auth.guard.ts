import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<true | UrlTree> {
    return this.authService.loggedInAdmin$.pipe(
      map((admin) => (admin ? true : this.router.parseUrl('/login')))
    );
  }
}
