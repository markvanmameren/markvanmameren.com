import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../../../shared/interfaces/user.interface';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<IUser> {
  constructor(private usersService: UsersService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<IUser> {
    // user.guard prevents id and user from being undefined
    const id = route.paramMap.get('id');
    return this.usersService.userById$(id!) as Observable<IUser>;
  }
}
