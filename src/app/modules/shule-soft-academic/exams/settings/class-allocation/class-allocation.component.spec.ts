import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAllocationComponent } from './class-allocation.component';

describe('ClassAllocationComponent', () => {
  let component: ClassAllocationComponent;
  let fixture: ComponentFixture<ClassAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassAllocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
