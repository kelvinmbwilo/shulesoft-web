import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGradingComponent } from './special-grading.component';

describe('SpecialGradingComponent', () => {
  let component: SpecialGradingComponent;
  let fixture: ComponentFixture<SpecialGradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialGradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialGradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
