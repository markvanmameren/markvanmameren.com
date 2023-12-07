import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { PassworldFieldVisible } from '../../../enums/passworld-field-visible.enum';
import { IRegisterFormGroup } from '../../../interfaces/registerform-group.interface';
import { IRegisterFormValue } from '../../../interfaces/registerform-value.interface';
import { controlContainsValidator } from '../../../validators/control-contains/control-contains.validator';
import { controlsMatchValidator } from '../../../validators/controls-match/controls-match.validator';

@Component({
  selector: 'pf-registerform[onSubmitEmitter]',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss'],
})
export class RegisterformComponent implements OnInit {
  @Input() initialFormValue: IRegisterFormValue = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };
  @Output() onSubmitEmitter = new EventEmitter<IRegisterFormValue>();

  public isSubmitError = false;
  public isPasswordVisible = false;
  public PasswordFieldVisible = PassworldFieldVisible;

  // icons
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;

  private readonly minPasswordLength = 8;
  private readonly maxLength = 255;

  public firstName = new FormControl('', [
    Validators.required,
    Validators.maxLength(this.maxLength),
  ]);
  public lastName = new FormControl('', [
    Validators.required,
    Validators.maxLength(this.maxLength),
  ]);
  public email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.maxLength(this.maxLength),
  ]);
  public password = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minPasswordLength),
    Validators.maxLength(this.maxLength),
  ]);
  public passwordConfirm = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minPasswordLength),
    Validators.maxLength(this.maxLength),
  ]);
  public form = new FormGroup(
    {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
    },
    [
      controlsMatchValidator(this.password, this.passwordConfirm),
      controlContainsValidator(this.password, [this.firstName, this.lastName]),
    ]
  ) as IRegisterFormGroup;

  public ngOnInit(): void {
    this.form.setValue(this.initialFormValue);
  }

  public togglePasswordVisible(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  public onSubmit(): void {
    if (!this.form.valid) {
      this.isSubmitError = true;
      return;
    }
    this.isSubmitError = false;
    this.onSubmitEmitter.emit(this.form.value);
  }
}
