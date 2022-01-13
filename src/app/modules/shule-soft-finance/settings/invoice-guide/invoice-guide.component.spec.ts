import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceGuideComponent } from './invoice-guide.component';

describe('InvoiceGuideComponent', () => {
  let component: InvoiceGuideComponent;
  let fixture: ComponentFixture<InvoiceGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
