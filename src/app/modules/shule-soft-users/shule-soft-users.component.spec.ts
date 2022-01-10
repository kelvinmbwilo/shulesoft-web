import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuleSoftUsersComponent } from './shule-soft-users.component';

describe('ShuleSoftUsersComponent', () => {
  let component: ShuleSoftUsersComponent;
  let fixture: ComponentFixture<ShuleSoftUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuleSoftUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuleSoftUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
