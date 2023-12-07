import { Component, Input } from '@angular/core';
import { IImage } from '../../../interfaces/image.interface';

@Component({
  selector: 'pf-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.scss'],
})
export class GridCellComponent {
  @Input() image?: IImage;
}
