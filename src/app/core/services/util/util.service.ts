import { Injectable } from '@angular/core';
import { fromEvent, map, Observable, shareReplay, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  public isMobile$: Observable<boolean> = fromEvent(window, 'resize').pipe(
    startWith(this.isMobile()),
    map(() => this.isMobile()),
    shareReplay(1)
  );

  private isMobile(): boolean {
    return window.innerWidth < 1080;
  }
}
