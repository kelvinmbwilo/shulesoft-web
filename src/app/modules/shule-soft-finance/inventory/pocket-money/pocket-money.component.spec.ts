import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketMoneyComponent } from './pocket-money.component';

describe('PocketMoneyComponent', () => {
  let component: PocketMoneyComponent;
  let fixture: ComponentFixture<PocketMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocketMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
