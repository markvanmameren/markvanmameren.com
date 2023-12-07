import { TestBed } from '@angular/core/testing';
import { IModalContent } from '../../interfaces/modal-content.interface';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('showModal', () => {
    let testModalContent: IModalContent;

    beforeEach(() => {
      testModalContent = {
        titleText: 'test titleText',
        bodyText: 'test bodyText',
        buttons: [
          {
            text: 'test buttonText',
            callback: () => 'test callback',
            warning: true,
          },
        ],
      };
    });

    it('should set isLoading$ to false', (done) => {
      service.showModal(testModalContent);

      service.isLoading$.subscribe((isLoading) => {
        expect(isLoading).toBe(false);
        done();
      });
    });

    it('should set modalContent$ to content', (done) => {
      service.showModal(testModalContent);

      service.modalContent$.subscribe((modalContent) => {
        expect(modalContent).toBe(testModalContent);
        done();
      });
    });
  });

  describe('hideModal', () => {
    it('should set isLoading$ to false', (done) => {
      service.hideModal();

      service.isLoading$.subscribe((isLoading) => {
        expect(isLoading).toBe(false);
        done();
      });
    });

    it('should set modalContent$ to null', (done) => {
      service.hideModal();

      service.modalContent$.subscribe((modalContent) => {
        expect(modalContent).toBe(null);
        done();
      });
    });
  });

  describe('showLoader', () => {
    it('should set isLoading$ to true', (done) => {
      service.showLoader();

      service.isLoading$.subscribe((isLoading) => {
        expect(isLoading).toBe(true);
        done();
      });
    });

    it('should set modalContent$ to null', (done) => {
      service.showLoader();

      service.modalContent$.subscribe((modalContent) => {
        expect(modalContent).toBe(null);
        done();
      });
    });
  });
});
