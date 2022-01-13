import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxPensionFundComponent } from './tax-pension-fund.component';

describe('TaxPensionFundComponent', () => {
  let component: TaxPensionFundComponent;
  let fixture: ComponentFixture<TaxPensionFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxPensionFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxPensionFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
