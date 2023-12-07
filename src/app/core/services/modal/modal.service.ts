import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IModalContent } from '../../interfaces/modal-content.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _modalContent$ = new BehaviorSubject<IModalContent | null>(null);
  public modalContent$ = this._modalContent$.asObservable();

  private _isLoading$ = new BehaviorSubject<boolean>(false);
  public isLoading$ = this._isLoading$.asObservable();

  public showModal(modalContent: IModalContent): void {
    this._isLoading$.next(false);
    this._modalContent$.next(modalContent);
  }

  public hideModal(): void {
    this._isLoading$.next(false);
    this._modalContent$.next(null);
  }

  public showLoader(): void {
    this._isLoading$.next(true);
    this._modalContent$.next(null);
  }
}
