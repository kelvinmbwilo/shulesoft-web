import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorSchoolExamsComponent } from './minor-school-exams.component';

describe('MinorSchoolExamsComponent', () => {
  let component: MinorSchoolExamsComponent;
  let fixture: ComponentFixture<MinorSchoolExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorSchoolExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorSchoolExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
