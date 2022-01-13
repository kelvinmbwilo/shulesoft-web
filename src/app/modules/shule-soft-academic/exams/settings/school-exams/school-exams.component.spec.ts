import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolExamsComponent } from './school-exams.component';

describe('SchoolExamsComponent', () => {
  let component: SchoolExamsComponent;
  let fixture: ComponentFixture<SchoolExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
