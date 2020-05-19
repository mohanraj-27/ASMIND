import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashAdvanceComponent } from './cash-advance.component';

describe('CashAdvanceComponent', () => {
  let component: CashAdvanceComponent;
  let fixture: ComponentFixture<CashAdvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashAdvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
