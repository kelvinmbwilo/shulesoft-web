import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionFundComponent } from './pension-fund.component';

describe('PensionFundComponent', () => {
  let component: PensionFundComponent;
  let fixture: ComponentFixture<PensionFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
