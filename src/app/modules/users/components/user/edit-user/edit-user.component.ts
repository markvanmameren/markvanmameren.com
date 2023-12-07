import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ModalService } from '../../../../../core/services/modal/modal.service';
import { ResponseEnum } from '../../../../../shared/enums/response.enum';
import { IRegisterFormValue } from '../../../../../shared/interfaces/registerform-value.interface';
import { IUser } from '../../../../../shared/interfaces/user.interface';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'pf-edit-user',
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent {
  public initialFormValue!: IRegisterFormValue;
  public user!: IUser;
  public routeSubscription = this.activatedRoute.parent!.data.subscribe(
    // user is checked for undefined by guard
    ({ user }) => this.setUser(user as IUser)
  );

  private destroyed$ = new Subject<null>();

  constructor(
    private usersService: UsersService,
    private modalService: ModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public setUser(user: IUser): void {
    this.user = user;
    this.initialFormValue = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      passwordConfirm: user.password,
    };
  }

  public onSubmit(formValue: IRegisterFormValue): void {
    const { passwordConfirm, ...user } = formValue;
    this.modalService.showLoader();
    this.usersService
      .updateUser$({
        id: this.user.id,
        ...user,
      })
      .pipe(takeUntil(this.destroyed$))
      .subscribe((response: ResponseEnum) =>
        response === ResponseEnum.SUCCESS
          ? this.handleSuccess()
          : this.handleError()
      );
  }

  private handleSuccess(): void {
    this.modalService.showModal({
      titleText: 'Success',
      bodyText: 'The user was successfully updated.',
      buttons: [
        {
          text: 'OK',
          callback: () => {
            this.router.navigate(['/users', this.user.id]);
            this.modalService.hideModal();
          },
        },
      ],
    });
  }

  private handleError(): void {
    this.modalService.showModal({
      titleText: 'Error',
      bodyText: 'Could not update user at this moment. Please try again later.',
      buttons: [
        {
          text: 'OK',
          callback: () => this.modalService.hideModal(),
        },
      ],
    });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
