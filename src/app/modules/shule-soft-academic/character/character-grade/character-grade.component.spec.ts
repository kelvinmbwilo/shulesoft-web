import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGradeComponent } from './character-grade.component';

describe('CharacterGradeComponent', () => {
  let component: CharacterGradeComponent;
  let fixture: ComponentFixture<CharacterGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
