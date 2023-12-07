import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';

describe('UtilService', () => {
  let service: UtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('isMobile$', () => {
    it('should return an observable of true when window size is below 1080px', (done) => {
      spyOnProperty(window, 'innerWidth', 'get').and.returnValue(900);

      service.isMobile$.subscribe((isMobile) => {
        expect(isMobile).toEqual(true);
        done();
      });
    });

    it('should return an observable of false when window size is above 1080px', (done) => {
      spyOnProperty(window, 'innerWidth', 'get').and.returnValue(1100);

      service.isMobile$.subscribe((isMobile) => {
        expect(isMobile).toEqual(false);
        done();
      });
    });
  });
});
