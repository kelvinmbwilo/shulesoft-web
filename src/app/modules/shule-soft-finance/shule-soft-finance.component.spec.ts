import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuleSoftFinanceComponent } from './shule-soft-finance.component';

describe('ShuleSoftFinanceComponent', () => {
  let component: ShuleSoftFinanceComponent;
  let fixture: ComponentFixture<ShuleSoftFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuleSoftFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuleSoftFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
