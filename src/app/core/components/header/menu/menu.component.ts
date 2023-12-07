import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  faBars,
  faChevronDown,
  faUser,
  faUsers,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { filter, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';
import { UtilService } from '../../../services/util/util.service';
import { menuContent } from './menu.content';

@Component({
  selector: 'pf-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  public menuContent = menuContent;
  public menuIsOpen = false;
  public loggedInAdmin$ = this.authService.loggedInAdmin$;
  public isMobile$ = this.utilService.isMobile$;

  // icons
  public faBars = faBars;
  public faXmark = faXmark;
  public faUser = faUser;
  public faUsers = faUsers;
  public faChevronDown = faChevronDown;

  private destroyed$ = new Subject<null>();

  constructor(
    private authService: AuthService,
    private utilService: UtilService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => this.hideMenu());
  }

  public toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  public hideMenu(): void {
    this.menuIsOpen = false;
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
