import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ResponseEnum } from '../../../../shared/enums/response.enum';
import { mockContactformEntryCorrect } from '../../../../testing/mockdata/contactform/contactform-entry-correct.mock';
import { ContactformService } from './contactform.service';

describe('ContactformService', () => {
  let service: ContactformService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ContactformService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('postForm$', () => {
    const expectedURL =
      'https://getform.io/f/95bd7713-23ba-4c9d-ac59-aaf721766e49';
    let mockHttpRequest: TestRequest;

    afterEach(() => httpTestingController.verify());

    it('should post with the correct formdata', (done) => {
      const expectedFormData = new FormData();
      expectedFormData.append(
        'firstName',
        mockContactformEntryCorrect.firstName
      );
      expectedFormData.append('lastName', mockContactformEntryCorrect.lastName);
      expectedFormData.append('email', mockContactformEntryCorrect.email);
      expectedFormData.append('message', mockContactformEntryCorrect.message);

      service.postForm$(mockContactformEntryCorrect).subscribe(() => {
        expect(mockHttpRequest.request.body).toEqual(expectedFormData);
        done();
      });

      mockHttpRequest = httpTestingController.expectOne({
        url: expectedURL,
        method: 'POST',
      });
      mockHttpRequest.flush('success', { status: 200, statusText: 'OK' });
    });

    it('should return success if the request was succesful', (done) => {
      service.postForm$(mockContactformEntryCorrect).subscribe((response) => {
        expect(response).toBe(ResponseEnum.SUCCESS);
        done();
      });

      mockHttpRequest = httpTestingController.expectOne({
        url: expectedURL,
        method: 'POST',
      });
      mockHttpRequest.flush('success', { status: 200, statusText: 'OK' });
    });

    it('should return error if the request was NOT succesful', (done) => {
      service.postForm$(mockContactformEntryCorrect).subscribe((response) => {
        expect(response).toBe(ResponseEnum.ERROR);
        done();
      });

      mockHttpRequest = httpTestingController.expectOne({
        url: expectedURL,
        method: 'POST',
      });
      mockHttpRequest.flush('error', { status: 404, statusText: 'Not found' });
    });
  });
});
