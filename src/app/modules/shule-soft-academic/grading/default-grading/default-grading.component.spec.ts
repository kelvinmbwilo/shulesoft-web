import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultGradingComponent } from './default-grading.component';

describe('DefaultGradingComponent', () => {
  let component: DefaultGradingComponent;
  let fixture: ComponentFixture<DefaultGradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultGradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultGradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
