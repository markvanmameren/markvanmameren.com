import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { of } from 'rxjs';
import { IModalButton } from '../../../../core/interfaces/modal-button.interface';
import { IModalContent } from '../../../../core/interfaces/modal-content.interface';
import { ModalService } from '../../../../core/services/modal/modal.service';
import { ResponseEnum } from '../../../../shared/enums/response.enum';
import { mockSingleUser } from '../../../../testing/mockdata/user/single-user.mock';
import { getModalServiceSpy } from '../../../../testing/spies/services/modal.service.spy';
import { getUsersServiceSuccessSpy } from '../../../../testing/spies/services/users-success.service.spy';
import { UsersService } from '../../services/users.service';

import { UserToolbarComponent } from './user-toolbar.component';

describe('UserToolbarComponent', () => {
  let component: UserToolbarComponent;
  let fixture: ComponentFixture<UserToolbarComponent>;

  let usersServiceSpy: jasmine.SpyObj<UsersService>;
  let modalServiceSpy: jasmine.SpyObj<ModalService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule, RouterTestingModule],
      declarations: [UserToolbarComponent],
      providers: [
        { provide: UsersService, useFactory: getUsersServiceSuccessSpy },
        { provide: ModalService, useFactory: getModalServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserToolbarComponent);
    component = fixture.componentInstance;

    usersServiceSpy = TestBed.inject(
      UsersService
    ) as jasmine.SpyObj<UsersService>;
    modalServiceSpy = TestBed.inject(
      ModalService
    ) as jasmine.SpyObj<ModalService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('showDeletionPopup', () => {
    it('should call the modalservice showModal method', () => {
      component.userID = mockSingleUser.id!;

      component.showDeletionPopup();

      expect(modalServiceSpy.showModal).toHaveBeenCalledTimes(1);
    });

    it('should show error-modal when no userID is specified for deletion', () => {
      component.showDeletionPopup();

      expect(modalServiceSpy.showModal).toHaveBeenCalledOnceWith(
        jasmine.objectContaining({ titleText: 'Missing ID' })
      );
    });
  });

  describe('deleteUser', () => {
    let deleteFn: Function;

    beforeEach(() => {
      // get the delete function from the modal callback
      component.userID = mockSingleUser.id!;
      component.showDeletionPopup();

      const modalArgs: IModalContent = modalServiceSpy.showModal.calls
        .first()
        .args?.at(-1)!;
      const deleteBtn = modalArgs.buttons.find(
        ({ text }: IModalButton) => text === 'Yes'
      );
      deleteFn = deleteBtn?.callback!;
    });

    it('should get the delete function from the modal content', () => {
      expect(deleteFn).toBeInstanceOf(Function);
    });

    it('should show loader', () => {
      deleteFn();

      expect(modalServiceSpy.showLoader).toHaveBeenCalledTimes(1);
    });

    it('should hide loader', () => {
      deleteFn();

      expect(modalServiceSpy.hideModal).toHaveBeenCalledTimes(1);
    });

    it('should delete user from UsersService', () => {
      deleteFn();

      expect(usersServiceSpy.deleteUser$).toHaveBeenCalledOnceWith(
        mockSingleUser.id!
      );
    });

    it('should show success-modal after successfully deleting user from userService', () => {
      deleteFn();

      const mostRecentModalContent = modalServiceSpy.showModal.calls
        .mostRecent()
        .args.at(-1);

      expect(mostRecentModalContent).toEqual(
        jasmine.objectContaining({ titleText: 'Success' })
      );
    });

    it('should show error-modal after receiving error while trying to delete user from userService', () => {
      usersServiceSpy.deleteUser$.and.returnValue(of(ResponseEnum.ERROR));

      deleteFn();

      const mostRecentModalContent = modalServiceSpy.showModal.calls
        .mostRecent()
        .args.at(-1);

      expect(mostRecentModalContent).toEqual(
        jasmine.objectContaining({ titleText: 'Oops...' })
      );
    });
  });
});
