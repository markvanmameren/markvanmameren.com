import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { UtilService } from './core/services/util/util.service';
import { getRouterSpy } from './testing/spies/services/router.spy';
import { getTitleSpy } from './testing/spies/services/title.spy';
import { getUtilServiceSpy } from './testing/spies/services/util.service.spy';

describe('AppComponent', () => {
  let titleSpy: jasmine.SpyObj<Title>;

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: UtilService, useFactory: getUtilServiceSpy },
        { provide: Title, useFactory: getTitleSpy },
        { provide: Router, useFactory: getRouterSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    titleSpy = TestBed.inject(Title) as jasmine.SpyObj<Title>;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should update the title on router events', (done) => {
    app.routeName$.subscribe((routeName) => {
      expect(routeName).toBe('test title');
      expect(titleSpy.getTitle).toHaveBeenCalled();
      done();
    });
  });
});
