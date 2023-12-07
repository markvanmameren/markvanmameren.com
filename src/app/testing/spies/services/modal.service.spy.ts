import { ModalService } from '../../../core/services/modal/modal.service';

export const getModalServiceSpy = (): jasmine.SpyObj<ModalService> =>
  jasmine.createSpyObj('ModalService', [
    'showModal',
    'hideModal',
    'showLoader',
  ]);
