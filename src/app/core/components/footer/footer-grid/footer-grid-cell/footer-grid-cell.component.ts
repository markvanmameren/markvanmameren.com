import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pf-footer-grid-cell[icon][urlText]',
  templateUrl: './footer-grid-cell.component.html',
  styleUrls: ['./footer-grid-cell.component.scss'],
})
export class FooterGridCellComponent {
  @Input() icon: IconDefinition = faLightbulb;
  @Input() urlText!: string;
  @Input() urlInternal?: string;
  @Input() urlExternal?: string;
}
