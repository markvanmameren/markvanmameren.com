import { Component, Input } from '@angular/core';
import { ITableRow } from '../../interfaces/table-row';

@Component({
  selector: 'pf-table[rows]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() rows!: ITableRow[];
}
