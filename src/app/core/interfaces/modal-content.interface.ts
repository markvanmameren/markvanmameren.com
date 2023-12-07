import { IModalButton } from './modal-button.interface';

export interface IModalContent {
  titleText: string;
  bodyText: string;
  buttons: IModalButton[];
}
