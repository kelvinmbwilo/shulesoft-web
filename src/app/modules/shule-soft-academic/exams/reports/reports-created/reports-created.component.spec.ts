import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsCreatedComponent } from './reports-created.component';

describe('ReportsCreatedComponent', () => {
  let component: ReportsCreatedComponent;
  let fixture: ComponentFixture<ReportsCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
