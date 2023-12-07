import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ModalService } from '../../../../core/services/modal/modal.service';
import { ResponseEnum } from '../../../../shared/enums/response.enum';
import { IContactFormGroup } from '../../interfaces/contactform-group.interface';
import { ContactformService } from '../../services/contactform/contactform.service';

@Component({
  selector: 'pf-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss'],
})
export class ContactFormComponent implements OnDestroy {
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
  public message = new FormControl('', [
    Validators.required,
    Validators.maxLength(this.maxLength),
  ]);
  public form = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    message: this.message,
  }) as IContactFormGroup;

  private destroyed$ = new Subject<null>();

  constructor(
    private contactformService: ContactformService,
    private modalService: ModalService
  ) {}

  public onSubmit(): void {
    if (!this.form.valid) {
      this.handleError();
      return;
    }
    this.modalService.showLoader();
    this.contactformService
      .postForm$(this.form.value)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((response) =>
        response === ResponseEnum.SUCCESS
          ? this.handleSuccess()
          : this.handleError()
      );
  }

  private handleSuccess(): void {
    this.modalService.showModal({
      titleText: 'Thank you',
      bodyText:
        'We successfully received your contactform and get back to you within 48 hours.',
      buttons: [
        {
          text: 'OK',
          callback: () => this.modalService.hideModal(),
        },
      ],
    });
    this.clearForm();
  }

  private handleError(): void {
    this.modalService.showModal({
      titleText: 'Error',
      bodyText:
        'There was an error while processing your contactform. Please try again later.',
      buttons: [
        {
          text: 'OK',
          callback: () => this.modalService.hideModal(),
        },
      ],
    });
  }

  public clearForm(): void {
    this.form.reset();
    this.form.markAsPristine();
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
