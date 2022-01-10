import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationManagerMenuComponent } from './communication-manager-menu.component';

describe('CommunicationManagerMenuComponent', () => {
  let component: CommunicationManagerMenuComponent;
  let fixture: ComponentFixture<CommunicationManagerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationManagerMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationManagerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
