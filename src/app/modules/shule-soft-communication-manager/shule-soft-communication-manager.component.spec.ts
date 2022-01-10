import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuleSoftCommunicationManagerComponent } from './shule-soft-communication-manager.component';

describe('ShuleSoftCommunicationManagerComponent', () => {
  let component: ShuleSoftCommunicationManagerComponent;
  let fixture: ComponentFixture<ShuleSoftCommunicationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuleSoftCommunicationManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuleSoftCommunicationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
