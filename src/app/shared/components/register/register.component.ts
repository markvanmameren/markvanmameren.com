import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ModalService } from '../../../core/services/modal/modal.service';
import { ResponseEnum } from '../../enums/response.enum';
import { IRegisterFormValue } from '../../interfaces/registerform-value.interface';

@Component({
  selector: 'pf-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnDestroy {
  private destroyed$ = new Subject<null>();

  constructor(
    private authService: AuthService,
    private modalService: ModalService,
    private router: Router
  ) {}

  public onSubmit(formValue: IRegisterFormValue): void {
    const { passwordConfirm, ...user } = formValue;
    this.authService
      .register$(user)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((response) =>
        response === ResponseEnum.SUCCESS
          ? this.handleSuccess()
          : this.handleError()
      );
  }

  private handleSuccess(): void {
    this.modalService.showModal({
      titleText: 'Success',
      bodyText: 'You have been successfully registered',
      buttons: [
        {
          text: 'OK',
          callback: () => {
            this.modalService.hideModal();
            this.router.navigate(['/my-profile']);
          },
        },
      ],
    });
  }

  private handleError(): void {
    this.modalService.showModal({
      titleText: 'Oops...',
      bodyText: 'An error occured while registering',
      buttons: [{ text: 'OK', callback: () => this.modalService.hideModal() }],
    });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
