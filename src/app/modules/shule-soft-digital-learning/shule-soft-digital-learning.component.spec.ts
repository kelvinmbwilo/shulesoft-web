import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuleSoftDigitalLearningComponent } from './shule-soft-digital-learning.component';

describe('ShuleSoftDigitalLearningComponent', () => {
  let component: ShuleSoftDigitalLearningComponent;
  let fixture: ComponentFixture<ShuleSoftDigitalLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuleSoftDigitalLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuleSoftDigitalLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
