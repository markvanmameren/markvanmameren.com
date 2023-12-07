import { Component, Input } from '@angular/core';

@Component({
  selector: 'pf-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() isLarge = false;
}
