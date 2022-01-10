import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalLearningMenuComponent } from './digital-learning-menu.component';

describe('DigitalLearningMenuComponent', () => {
  let component: DigitalLearningMenuComponent;
  let fixture: ComponentFixture<DigitalLearningMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalLearningMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalLearningMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
