import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuleSoftConfigurationComponent } from './shule-soft-configuration.component';

describe('ShuleSoftConfigurationComponent', () => {
  let component: ShuleSoftConfigurationComponent;
  let fixture: ComponentFixture<ShuleSoftConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuleSoftConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuleSoftConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
