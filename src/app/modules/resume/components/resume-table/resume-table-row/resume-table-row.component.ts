import { Component, Input } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { UtilService } from '../../../../../core/services/util/util.service';
import { IResumeRow } from '../../../interfaces/resume-row.interface';

@Component({
  selector: 'pf-resume-table-row[content]',
  templateUrl: './resume-table-row.component.html',
  styleUrls: ['./resume-table-row.component.scss'],
})
export class ResumeTableRowComponent {
  @Input() content!: IResumeRow;

  public isMobile$ = this.utilService.isMobile$;
  public isOpen = false;

  // icons
  public faPlus = faPlus;
  public faMinus = faMinus;

  constructor(private utilService: UtilService) {}
}
