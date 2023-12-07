import { Component, Input } from '@angular/core';
import { IImage } from '../../../interfaces/image.interface';

@Component({
  selector: 'pf-image-grid-cell',
  templateUrl: './image-grid-cell.component.html',
  styleUrls: ['./image-grid-cell.component.scss'],
})
export class ImageGridCellComponent {
  @Input() title!: string;
  @Input() image!: IImage;
  @Input() urlInternal?: string;
  @Input() urlExternal?: string;
}
