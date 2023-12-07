import { Component } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'pf-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  public modalContent$ = this.modalService.modalContent$;
  public isLoading$ = this.modalService.isLoading$;

  constructor(private modalService: ModalService) {}
}
