import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductionNewComponent } from './deduction-new.component';

describe('DeductionNewComponent', () => {
  let component: DeductionNewComponent;
  let fixture: ComponentFixture<DeductionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeductionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
