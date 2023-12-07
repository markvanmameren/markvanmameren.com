import { Component, Input } from '@angular/core';

@Component({
  selector: 'pf-error-message[message]',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input() message = 'Error';
}
