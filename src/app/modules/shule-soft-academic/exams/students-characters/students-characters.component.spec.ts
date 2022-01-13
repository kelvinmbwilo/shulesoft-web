import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCharactersComponent } from './students-characters.component';

describe('StudentsCharactersComponent', () => {
  let component: StudentsCharactersComponent;
  let fixture: ComponentFixture<StudentsCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
