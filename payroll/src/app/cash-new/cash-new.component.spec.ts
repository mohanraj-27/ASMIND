import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashNewComponent } from './cash-new.component';

describe('CashNewComponent', () => {
  let component: CashNewComponent;
  let fixture: ComponentFixture<CashNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
