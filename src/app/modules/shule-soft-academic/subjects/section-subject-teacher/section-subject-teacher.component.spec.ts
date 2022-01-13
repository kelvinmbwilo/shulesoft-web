import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSubjectTeacherComponent } from './section-subject-teacher.component';

describe('SectionSubjectTeacherComponent', () => {
  let component: SectionSubjectTeacherComponent;
  let fixture: ComponentFixture<SectionSubjectTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSubjectTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSubjectTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
