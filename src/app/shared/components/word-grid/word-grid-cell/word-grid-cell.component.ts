import { Component, Input } from '@angular/core';
import { faLightbulb, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pf-word-grid-cell[title]',
  templateUrl: './word-grid-cell.component.html',
  styleUrls: ['./word-grid-cell.component.scss'],
})
export class WordGridCellComponent {
  @Input() title!: string;
  @Input() icon: IconDefinition = faLightbulb;
}
