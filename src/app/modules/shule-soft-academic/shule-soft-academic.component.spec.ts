import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuleSoftAcademicComponent } from './shule-soft-academic.component';

describe('ShuleSoftAcademicComponent', () => {
  let component: ShuleSoftAcademicComponent;
  let fixture: ComponentFixture<ShuleSoftAcademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuleSoftAcademicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuleSoftAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
