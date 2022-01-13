import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaReportComponent } from './ca-report.component';

describe('CaReportComponent', () => {
  let component: CaReportComponent;
  let fixture: ComponentFixture<CaReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
