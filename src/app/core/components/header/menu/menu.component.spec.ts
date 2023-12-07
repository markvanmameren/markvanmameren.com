import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationSkipped,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { BehaviorSubject } from 'rxjs';
import { getAuthServiceSuccessSpy } from '../../../../testing/spies/services/auth-success.spy.service';
import { getUtilServiceSpy } from '../../../../testing/spies/services/util.service.spy';
import { AuthService } from '../../../services/auth/auth.service';
import { UtilService } from '../../../services/util/util.service';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let eventsSubject: BehaviorSubject<RouterEvent>;

  beforeEach(async () => {
    eventsSubject = new BehaviorSubject<RouterEvent>(
      new NavigationStart(0, '')
    );

    const routerSpy = jasmine.createSpyObj(
      'Router',
      {},
      { events: eventsSubject.asObservable() }
    );

    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule],
      declarations: [MenuComponent],
      providers: [
        { provide: AuthService, useFactory: getAuthServiceSuccessSpy },
        { provide: UtilService, useFactory: getUtilServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should hide the menu on NavigationEnd', () => {
      const hideMenuSpy = spyOn(component, 'hideMenu');

      eventsSubject.next(new NavigationEnd(0, '', ''));

      expect(hideMenuSpy).toHaveBeenCalledTimes(1);
    });

    it('should not hide the menu on any RouterEvent except NavigationEnd', () => {
      const hideMenuSpy = spyOn(component, 'hideMenu');

      eventsSubject.next(new NavigationStart(0, ''));
      eventsSubject.next(new NavigationCancel(0, '', ''));
      eventsSubject.next(new NavigationError(0, '', ''));
      eventsSubject.next(new NavigationSkipped(0, '', ''));

      expect(hideMenuSpy).not.toHaveBeenCalled();
    });
  });

  describe('toggleMenu', () => {
    it('should open the menu when the menu is closed', () => {
      component.menuIsOpen = false;

      component.toggleMenu();

      expect(component.menuIsOpen).toBe(true);
    });

    it('should close the menu when the menu is open', () => {
      component.menuIsOpen = true;

      component.toggleMenu();

      expect(component.menuIsOpen).toBe(false);
    });
  });

  describe('hideMenu', () => {
    it('should hide menu', () => {
      component.menuIsOpen = true;

      component.hideMenu();

      expect(component.menuIsOpen).toBe(false);
    });
  });
});
