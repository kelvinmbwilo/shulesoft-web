import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCharacterComponent } from './list-of-character.component';

describe('ListOfCharacterComponent', () => {
  let component: ListOfCharacterComponent;
  let fixture: ComponentFixture<ListOfCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
