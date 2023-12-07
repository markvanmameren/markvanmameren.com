import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ModalService } from '../../../../core/services/modal/modal.service';
import { ResponseEnum } from '../../../../shared/enums/response.enum';
import { IRegisterFormValue } from '../../../../shared/interfaces/registerform-value.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'pf-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent {
  public isSubmitError = false;

  private destroyed$ = new Subject<null>();

  constructor(
    private usersService: UsersService,
    private modalService: ModalService,
    private router: Router
  ) {}

  public onSubmit(formValue: IRegisterFormValue): void {
    const { passwordConfirm, ...user } = formValue;
    this.modalService.showLoader();
    this.usersService
      .addUser$(user)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((response: ResponseEnum) => {
        this.modalService.hideModal();
        response === ResponseEnum.SUCCESS
          ? this.handleSuccess()
          : this.handleError();
      });
  }

  private handleSuccess(): void {
    this.isSubmitError = false;
    this.modalService.showModal({
      titleText: 'Success',
      bodyText: 'The new user was successfully added',
      buttons: [
        {
          text: 'OK',
          callback: () => {
            this.router.navigate(['/users']);
            this.modalService.hideModal();
          },
        },
      ],
    });
  }

  private handleError(): void {
    this.isSubmitError = true;
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
