import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuleSoftOperationsComponent } from './shule-soft-operations.component';

describe('ShuleSoftOperationsComponent', () => {
  let component: ShuleSoftOperationsComponent;
  let fixture: ComponentFixture<ShuleSoftOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuleSoftOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuleSoftOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
