import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { mockRegisterEntryCorrect } from '../../../../testing/mockdata/user/register-entry-correct.mock';
import { mockRegisterEntryWrong } from '../../../../testing/mockdata/user/register-entry-wrong.mock';
import { IRegisterFormValue } from '../../../interfaces/registerform-value.interface';

import { RegisterformComponent } from './registerform.component';

describe('RegisterformComponent', () => {
  let component: RegisterformComponent;
  let fixture: ComponentFixture<RegisterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule, ReactiveFormsModule],
      declarations: [RegisterformComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterformComponent);
    component = fixture.componentInstance;
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
      expect(component.password).toBeInstanceOf(FormControl);
      expect(component.passwordConfirm).toBeInstanceOf(FormControl);
    });

    it('should create FormGroup', () => {
      expect(component.form).toBeInstanceOf(FormGroup);
    });
  });

  describe('togglePasswordVisible', () => {
    it('should set to true if initial value was false', () => {
      component.isPasswordVisible = false;

      component.togglePasswordVisible();

      expect(component.isPasswordVisible).toBe(true);
    });

    it('should set to false if initial value was true', () => {
      component.isPasswordVisible = true;

      component.togglePasswordVisible();

      expect(component.isPasswordVisible).toBe(false);
    });
  });

  describe('onSubmit', () => {
    let emitSpy: jasmine.SpyObj<EventEmitter<IRegisterFormValue>>;

    beforeEach(() => {
      emitSpy = jasmine.createSpyObj('onSubmitEmitter', ['emit']);
      component.onSubmitEmitter = emitSpy;
    });

    it('should show submit-error if form is invalid', () => {
      component.form.setValue(mockRegisterEntryWrong);

      component.onSubmit();

      expect(component.isSubmitError).toBe(true);
    });

    it('should NOT show submit-error if form is valid', () => {
      component.form.setValue(mockRegisterEntryCorrect);

      component.onSubmit();

      expect(component.isSubmitError).toBe(false);
    });

    it('should NOT emit if form is invalid', () => {
      component.form.setValue(mockRegisterEntryWrong);

      component.onSubmit();

      expect(emitSpy.emit).not.toHaveBeenCalled();
    });

    it('should emit if form is valid', () => {
      component.form.setValue(mockRegisterEntryCorrect);

      component.onSubmit();

      expect(emitSpy.emit).toHaveBeenCalledOnceWith(mockRegisterEntryCorrect);
    });
  });
});
