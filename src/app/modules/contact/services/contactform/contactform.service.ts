import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ResponseEnum } from '../../../../shared/enums/response.enum';
import { IContactFormValue } from '../../interfaces/contactform-value.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactformService {
  constructor(private httpClient: HttpClient) {}

  public postForm$(formData: IContactFormValue): Observable<ResponseEnum> {
    const url = 'https://getform.io/f/95bd7713-23ba-4c9d-ac59-aaf721766e49';
    let body = new FormData();
    body.append('firstName', formData.firstName);
    body.append('lastName', formData.lastName);
    body.append('email', formData.email);
    body.append('message', formData.message);

    return this.httpClient
      .post(url, body, {
        observe: 'response',
        responseType: 'text',
      })
      .pipe(
        map(({ ok }) => (ok ? ResponseEnum.SUCCESS : ResponseEnum.ERROR)),
        catchError(() => of(ResponseEnum.ERROR))
      );
  }
}
