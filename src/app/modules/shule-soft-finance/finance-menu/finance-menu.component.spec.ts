import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceMenuComponent } from './finance-menu.component';

describe('FinanceMenuComponent', () => {
  let component: FinanceMenuComponent;
  let fixture: ComponentFixture<FinanceMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
