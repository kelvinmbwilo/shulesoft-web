import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicMenuComponent } from './academic-menu.component';

describe('AcademicMenuComponent', () => {
  let component: AcademicMenuComponent;
  let fixture: ComponentFixture<AcademicMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
