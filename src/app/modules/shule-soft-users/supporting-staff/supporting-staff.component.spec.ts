import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingStaffComponent } from './supporting-staff.component';

describe('SupportingStaffComponent', () => {
  let component: SupportingStaffComponent;
  let fixture: ComponentFixture<SupportingStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportingStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
