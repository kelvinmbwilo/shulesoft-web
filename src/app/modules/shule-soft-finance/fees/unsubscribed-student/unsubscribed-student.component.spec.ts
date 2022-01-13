import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribedStudentComponent } from './unsubscribed-student.component';

describe('UnsubscribedStudentComponent', () => {
  let component: UnsubscribedStudentComponent;
  let fixture: ComponentFixture<UnsubscribedStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribedStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribedStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
