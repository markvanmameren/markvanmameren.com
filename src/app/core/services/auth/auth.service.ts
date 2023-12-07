import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { ResponseEnum } from '../../../shared/enums/response.enum';
import { IAdmin } from '../../../shared/interfaces/admin.interface';
import { IUser } from '../../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedInAdmin$ = new BehaviorSubject<IUser | null>(null);
  public loggedInAdmin$ = this._loggedInAdmin$.asObservable();
  private admins$ = new BehaviorSubject<IUser[]>(
    require('./admins.json').admins
  );

  constructor(private cookieService: CookieService) {
    this.checkCookiesForAdmin();
  }

  public login$(adminLogin: IAdmin): Observable<ResponseEnum> {
    return this.admins$.pipe(
      map((admins) => {
        const admin = admins.find(
          (admin) =>
            admin.email === adminLogin.email &&
            admin.password === adminLogin.password
        );
        if (!admin) {
          throw new Error();
        }
        return admin;
      }),
      tap((admin) => {
        this._loggedInAdmin$.next(admin);
        this.cookieService.set('PFAdmin', admin.email!);
      }),
      map(() => ResponseEnum.SUCCESS),
      catchError(() => of(ResponseEnum.ERROR))
    );
  }

  public logout(): void {
    this._loggedInAdmin$.next(null);
    this.cookieService.delete('PFAdmin');
  }

  public register$(newAdmin: IUser): Observable<ResponseEnum> {
    this.admins$.next([...this.admins$.value, newAdmin]);
    return this.login$({
      email: newAdmin.email,
      password: newAdmin.password,
    });
  }

  private checkCookiesForAdmin(): void {
    const emailFromCookie = this.cookieService.get('PFAdmin');
    if (!emailFromCookie) {
      return;
    }

    const adminFromCookie = this.admins$
      .getValue()
      .find((admin) => admin.email === emailFromCookie);
    if (adminFromCookie) {
      this._loggedInAdmin$.next(adminFromCookie);
    }
  }
}
