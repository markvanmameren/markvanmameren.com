import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';
import { ResponseEnum } from '../../../shared/enums/response.enum';
import { IUser } from '../../../shared/interfaces/user.interface';
import { IApiResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = `https://6391f4a0ac688bbe4c57e549.mockapi.io/api/v1/`;
  private apiKey = `_lSA7t0bSOtK2u-nKCA4ZyMBseOra5C2RgOfPqRA4tErv4L4Kw`;
  private userUrl = this.baseUrl + `user`;
  private options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.apiKey,
    },
  };
  private _refreshUsersSubject$ = new BehaviorSubject<null>(null);
  private _apiRequest$ = this.httpClient.get<IUser[]>(
    this.userUrl,
    this.options
  );
  public users$ = this._refreshUsersSubject$.asObservable().pipe(
    switchMap(() => this._apiRequest$),
    shareReplay(1)
  );

  constructor(private httpClient: HttpClient) {}

  public userById$(id: string): Observable<IUser | undefined> {
    return this.users$.pipe(
      map((users) => users.find((user) => user.id === id))
    );
  }

  public addUser$(user: IUser): Observable<ResponseEnum> {
    return this.httpClient
      .post<IApiResponse>(this.userUrl, JSON.stringify(user), this.options)
      .pipe(
        map(({ response }) =>
          response === 'success' ? ResponseEnum.SUCCESS : ResponseEnum.ERROR
        ),
        catchError(() => of(ResponseEnum.ERROR)),
        tap(() => this.refreshUsers())
      );
  }

  public updateUser$(user: IUser): Observable<ResponseEnum> {
    if (!user?.id) {
      return of(ResponseEnum.ERROR);
    }
    return this.httpClient
      .put<IApiResponse>(
        this.userUrl + '/' + user.id,
        JSON.stringify(user),
        this.options
      )
      .pipe(
        map(({ response }) =>
          response === 'success' ? ResponseEnum.SUCCESS : ResponseEnum.ERROR
        ),
        catchError(() => of(ResponseEnum.ERROR)),
        tap(() => this.refreshUsers())
      );
  }

  public deleteUser$(id: string): Observable<ResponseEnum> {
    return this.httpClient
      .delete<IApiResponse>(this.userUrl + '/' + id, this.options)
      .pipe(
        map(({ response }) =>
          response === 'success' ? ResponseEnum.SUCCESS : ResponseEnum.ERROR
        ),
        catchError(() => of(ResponseEnum.ERROR)),
        tap(() => this.refreshUsers())
      );
  }

  private refreshUsers(): void {
    this._refreshUsersSubject$.next(null);
  }
}
