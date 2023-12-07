import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { IUser } from '../../../../shared/interfaces/user.interface';
import { ToolbarOptionEnum } from '../../enums/toolbar-option';

@Component({
  selector: 'pf-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  public user$ = this.activatedRoute.data.pipe(
    // user is checked for undefined by guard
    map(({ user }) => user as IUser)
  );
  public ToolbarOptionEnum = ToolbarOptionEnum;

  // icons
  public faEye = faEye;
  public faEdit = faEdit;
  public faTrash = faTrash;

  constructor(private activatedRoute: ActivatedRoute) {}
}
