import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getModalServiceSpy } from '../../../testing/spies/services/modal.service.spy';
import { ModalService } from '../../services/modal/modal.service';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  let modalServiceSpy: jasmine.SpyObj<ModalService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [{ provide: ModalService, useFactory: getModalServiceSpy }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;

    modalServiceSpy = TestBed.inject(
      ModalService
    ) as jasmine.SpyObj<ModalService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
