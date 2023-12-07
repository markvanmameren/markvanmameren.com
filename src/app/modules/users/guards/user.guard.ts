import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<true | UrlTree> {
    const id = route.paramMap.get('id');
    const redirect = this.router.parseUrl('/all-users');

    if (!id) {
      return of(redirect);
    }

    return this.usersService
      .userById$(id)
      .pipe(map((user) => (user?.id ? true : redirect)));
  }
}
