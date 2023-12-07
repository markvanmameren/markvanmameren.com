import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ResponseEnum } from '../../../shared/enums/response.enum';
import { IUser } from '../../../shared/interfaces/user.interface';
import { mockMultipleUsers } from '../../../testing/mockdata/user/multiple-users.mock';

import { UsersService } from './users.service';

describe('UsersService', () => {
  const baseUrl = `https://6391f4a0ac688bbe4c57e549.mockapi.io/api/v1/`;
  const userUrl = baseUrl + `user`;

  let service: UsersService;
  let httpTestingController: HttpTestingController;
  let mockHttpRequest: TestRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UsersService);
    httpTestingController = TestBed.inject(HttpTestingController);

    service.users$ = of(mockMultipleUsers);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('creation', () => {
    it('should create', () => {
      expect(service).toBeTruthy();
    });

    it('should have users', (done) => {
      service.users$.subscribe((users) => {
        expect(users.length).toBe(mockMultipleUsers.length);
        done();
      });
    });
  });

  describe('userById$', () => {
    it('should get user by existing id', (done) => {
      service.userById$(mockMultipleUsers[0].id!).subscribe((user) => {
        expect(user).toEqual(mockMultipleUsers[0]);
        done();
      });
    });
    it('should return an observable of undefined if no user matches the id', (done) => {
      service.userById$('999').subscribe((user) => {
        expect(user).toBeUndefined();
        done();
      });
    });
  });

  describe('addUser$', () => {
    let newUser: IUser;

    beforeEach(() => {
      newUser = {
        firstName: 'Henk',
        lastName: 'van Dijk',
        email: 'h.vandijk@gmail.com',
        password: '1234567890',
      };
    });

    it('should call http post with the correct body', (done) => {
      service.addUser$(newUser).subscribe((response) => {
        expect(response).toBe(ResponseEnum.SUCCESS);
        expect(mockHttpRequest.request.body).toEqual(JSON.stringify(newUser));
        done();
      });

      mockHttpRequest = httpTestingController.expectOne({
        url: userUrl,
        method: 'POST',
      });
      mockHttpRequest.flush({ response: 'success' });
    });

    it('should return success if the request was succesful', (done) => {
      service.addUser$(newUser).subscribe((response) => {
        expect(response).toBe(ResponseEnum.SUCCESS);
        done();
      });

      mockHttpRequest = httpTestingController.expectOne({
        url: userUrl,
        method: 'POST',
      });
      mockHttpRequest.flush({ response: 'success' });
    });

    it('should return error if the request was NOT succesful', (done) => {
      service.addUser$(newUser).subscribe((response) => {
        expect(response).toBe(ResponseEnum.ERROR);
        done();
      });

      mockHttpRequest = httpTestingController.expectOne({
        url: userUrl,
        method: 'POST',
      });
      mockHttpRequest.flush({ response: 'error' });
    });
  });

  describe('updateUser$', () => {
    let expectedURL: string;
    let updatedUser: IUser;

    beforeEach(() => {
      updatedUser = {
        id: '62',
        firstName: 'Henk',
        lastName: 'van Dijk',
        email: 'h.vandijk@gmail.com',
        password: '1234567890',
      };
      expectedURL = `${userUrl}/${updatedUser.id}`;
    });

    it('should not call http put if provided user has no id', (done) => {
      const { id, ...userWithoutID } = updatedUser;

      service.updateUser$(userWithoutID).subscribe((response) => {
        expect(response).toBe(ResponseEnum.ERROR);
        done();
      });

      httpTestingController.expectNone({
        method: 'PUT',
      });
    });

    it('should call http post with the correct body', (done) => {
      service.updateUser$(updatedUser).subscribe(() => {
        expect(mockHttpRequest.request.body).toEqual(
          JSON.stringify(updatedUser)
        );
        done();
      });

      mockHttpRequest = httpTestingController.expectOne({
        url: expectedURL,
        method: 'PUT',
      });
      mockHttpRequest.flush({ response: 'success' });
    });

    it('should return success if the request was succesful', (done) => {
      service.updateUser$(updatedUser).subscribe((response) => {
        expect(response).toBe(ResponseEnum.SUCCESS);
        done();
      });

      mockHttpRequest = httpTestingController.expectOne({
        url: expectedURL,
        method: 'PUT',
      });
      mockHttpRequest.flush({ response: 'success' });
    });

    it('should return error if the request was NOT succesful', (done) => {
      service.updateUser$(updatedUser).subscribe((response) => {
        expect(response).toBe(ResponseEnum.ERROR);
        done();
      });

      mockHttpRequest = httpTestingController.expectOne({
        url: expectedURL,
        method: 'PUT',
      });
      mockHttpRequest.flush({ response: 'error' });
    });
  });

  describe('deleteUser', () => {
    const userID = '62';
    const expectedURL = `${userUrl}/${userID}`;

    it('should return success if the request was succesful', (done) => {
      service.deleteUser$(userID).subscribe((response) => {
        expect(response).toBe(ResponseEnum.SUCCESS);
        done();
      });

      mockHttpRequest = httpTestingController.expectOne({
        url: expectedURL,
        method: 'DELETE',
      });
      mockHttpRequest.flush({ response: 'success' });
    });

    it('should return error if the request was NOT succesful', (done) => {
      service.deleteUser$(userID).subscribe((response) => {
        expect(response).toBe(ResponseEnum.ERROR);
        done();
      });

      mockHttpRequest = httpTestingController.expectOne({
        url: expectedURL,
        method: 'DELETE',
      });
      mockHttpRequest.flush({ response: 'error' });
    });
  });
});
