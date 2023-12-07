import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { IUser } from '../../../../../shared/interfaces/user.interface';
import { ToolbarOptionEnum } from '../../../enums/toolbar-option';

@Component({
  selector: 'pf-view-user',
  templateUrl: './view-user.component.html',
})
export class ViewUserComponent {
  public user$ = this.activatedRoute.parent!.data.pipe(
    // user is checked for undefined by guard
    map(({ user }) => user as IUser)
  );

  public ToolbarOptionEnum = ToolbarOptionEnum;

  constructor(private activatedRoute: ActivatedRoute) {}
}
