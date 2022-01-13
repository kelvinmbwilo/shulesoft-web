import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGradingNameComponent } from './special-grading-name.component';

describe('SpecialGradingNameComponent', () => {
  let component: SpecialGradingNameComponent;
  let fixture: ComponentFixture<SpecialGradingNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialGradingNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialGradingNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
