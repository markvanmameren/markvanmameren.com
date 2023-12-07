import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { ResponseEnum } from '../../../enums/response.enum';
import { ILoginFormGroup } from '../../../interfaces/loginform-group.interface';

@Component({
  selector: 'pf-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent implements OnDestroy {
  private readonly maxLength = 255;
  public isInvalidCredentials = false;

  public email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.maxLength(this.maxLength),
  ]);
  public password = new FormControl('', [
    Validators.required,
    Validators.maxLength(this.maxLength),
  ]);
  public form = new FormGroup({
    email: this.email,
    password: this.password,
  }) as ILoginFormGroup;

  private destroyed$ = new Subject<null>();

  constructor(private authService: AuthService, private router: Router) {}

  public onSubmit(): void {
    if (!this.form.valid) {
      this.isInvalidCredentials = true;
      return;
    }
    this.authService
      .login$(this.form.value)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((response) => {
        response == ResponseEnum.SUCCESS
          ? this.router.navigate(['/my-profile'])
          : (this.isInvalidCredentials = true);
      });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
