import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilService } from '../../../../../core/services/util/util.service';
import { getUtilServiceSpy } from '../../../../../testing/spies/services/util.service.spy';

import { ResumeTableRowComponent } from './resume-table-row.component';

describe('ResumeTableRowComponent', () => {
  let utilServiceSpy: jasmine.SpyObj<UtilService>;

  let component: ResumeTableRowComponent;
  let fixture: ComponentFixture<ResumeTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeTableRowComponent],
      providers: [{ provide: UtilService, useFactory: getUtilServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeTableRowComponent);
    component = fixture.componentInstance;

    utilServiceSpy = TestBed.inject(UtilService) as jasmine.SpyObj<UtilService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
