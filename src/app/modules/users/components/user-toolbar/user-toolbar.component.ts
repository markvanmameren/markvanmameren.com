import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { ModalService } from '../../../../core/services/modal/modal.service';
import { ResponseEnum } from '../../../../shared/enums/response.enum';
import { ToolbarOptionEnum } from '../../enums/toolbar-option';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'pf-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss'],
})
export class UserToolbarComponent implements OnDestroy {
  @Input() userID!: string;
  @Input() options!: ToolbarOptionEnum[];

  public ToolbarOptionEnum = ToolbarOptionEnum;

  // icons
  public faEye = faEye;
  public faEdit = faEdit;
  public faTrash = faTrash;

  private destroyed$ = new Subject<null>();

  constructor(
    private modalService: ModalService,
    private usersService: UsersService,
    private router: Router
  ) {}

  public showDeletionPopup(): void {
    if (!this.userID) {
      this.handleErrorNoID();
      return;
    }

    this.modalService.showModal({
      titleText: 'Are you sure?',
      bodyText: 'This operation can not be undone.',
      buttons: [
        {
          text: 'Yes',
          callback: () => this.deleteUser(),
          warning: true,
        },
        {
          text: 'No',
          callback: () => this.modalService.hideModal(),
        },
      ],
    });
  }

  private deleteUser(): void {
    this.modalService.showLoader();
    this.usersService
      .deleteUser$(this.userID)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((response: ResponseEnum) => {
        this.modalService.hideModal();
        response === ResponseEnum.SUCCESS
          ? this.handleSuccess()
          : this.handleErrorDeletion();
      });
  }

  private handleSuccess(): void {
    this.modalService.showModal({
      titleText: 'Success',
      bodyText: 'The user was successfully deleted.',
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

  private handleErrorNoID(): void {
    this.modalService.showModal({
      titleText: 'Missing ID',
      bodyText: 'No user ID could be found.',
      buttons: [
        { text: 'Cancel', callback: () => this.modalService.hideModal() },
      ],
    });
  }

  private handleErrorDeletion(): void {
    this.modalService.showModal({
      titleText: 'Oops...',
      bodyText: 'An error occured while deleting the user.',
      buttons: [
        { text: 'Cancel', callback: () => this.modalService.hideModal() },
      ],
    });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
