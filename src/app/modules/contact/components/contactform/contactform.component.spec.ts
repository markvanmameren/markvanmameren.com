import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ModalService } from '../../../../core/services/modal/modal.service';
import { ResponseEnum } from '../../../../shared/enums/response.enum';
import { mockContactformEntryCorrect } from '../../../../testing/mockdata/contactform/contactform-entry-correct.mock';
import { mockContactformEntryWrong } from '../../../../testing/mockdata/contactform/contactform-entry-wrong.mock';
import { getContactformSuccessServiceSpy } from '../../../../testing/spies/services/contactform-success.service.spy';
import { getModalServiceSpy } from '../../../../testing/spies/services/modal.service.spy';
import { ContactformService } from '../../services/contactform/contactform.service';

import { ContactFormComponent } from './contactform.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  let contactformServiceSpy: jasmine.SpyObj<ContactformService>;
  let modalServiceSpy: jasmine.SpyObj<ModalService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ContactFormComponent],
      providers: [
        {
          provide: ContactformService,
          useFactory: getContactformSuccessServiceSpy,
        },
        { provide: ModalService, useFactory: getModalServiceSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;

    contactformServiceSpy = TestBed.inject(
      ContactformService
    ) as jasmine.SpyObj<ContactformService>;
    modalServiceSpy = TestBed.inject(
      ModalService
    ) as jasmine.SpyObj<ModalService>;

    fixture.detectChanges();
  });

  describe('creation', () => {
    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    it('should create FormControls', () => {
      expect(component.firstName).toBeInstanceOf(FormControl);
      expect(component.lastName).toBeInstanceOf(FormControl);
      expect(component.email).toBeInstanceOf(FormControl);
      expect(component.message).toBeInstanceOf(FormControl);
    });

    it('should create FormGroup', () => {
      expect(component.form).toBeInstanceOf(FormGroup);
    });
  });

  describe('onSubmit', () => {
    it('should NOT show loader if form is invalid', () => {
      component.form.setValue(mockContactformEntryWrong);

      component.onSubmit();

      expect(modalServiceSpy.showLoader).not.toHaveBeenCalled();
    });

    it('should show loader if form is valid', () => {
      component.form.setValue(mockContactformEntryCorrect);

      component.onSubmit();

      expect(modalServiceSpy.showLoader).toHaveBeenCalledTimes(1);
    });

    it('should NOT post form if form is invalid', () => {
      component.form.setValue(mockContactformEntryWrong);

      component.onSubmit();

      expect(contactformServiceSpy.postForm$).not.toHaveBeenCalled();
    });

    it('should show error-modal on receiving error while trying to post contactform', () => {
      contactformServiceSpy.postForm$.and.returnValue(of(ResponseEnum.ERROR));

      component.form.setValue(mockContactformEntryCorrect);
      component.onSubmit();

      expect(modalServiceSpy.showModal).toHaveBeenCalledOnceWith(
        jasmine.objectContaining({ titleText: 'Error' })
      );
    });

    it('should post form if form is valid ', () => {
      component.form.setValue(mockContactformEntryCorrect);

      component.onSubmit();

      expect(contactformServiceSpy.postForm$).toHaveBeenCalledOnceWith(
        mockContactformEntryCorrect
      );
    });

    it('should show success modal after successfully posting contactform', () => {
      component.form.setValue(mockContactformEntryCorrect);
      component.onSubmit();

      expect(modalServiceSpy.showModal).toHaveBeenCalledOnceWith(
        jasmine.objectContaining({ titleText: 'Thank you' })
      );
    });

    it('should clear contactform after successfully posting contactform', () => {
      const clearFormSpy = spyOn(component, 'clearForm');

      component.form.setValue(mockContactformEntryCorrect);
      component.onSubmit();

      expect(clearFormSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('clearForm', () => {
    it('should reset the form', () => {
      const resetSpy = spyOn(component.form, 'reset');

      component.clearForm();

      expect(resetSpy).toHaveBeenCalledTimes(1);
    });

    it('should mark the form as pristine', () => {
      const pristineSpy = spyOn(component.form, 'markAsPristine');

      component.clearForm();

      expect(pristineSpy).toHaveBeenCalledTimes(1);
    });
  });
});
