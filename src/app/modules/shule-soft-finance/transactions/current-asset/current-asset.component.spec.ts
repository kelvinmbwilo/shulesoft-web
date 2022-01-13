import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAssetComponent } from './current-asset.component';

describe('CurrentAssetComponent', () => {
  let component: CurrentAssetComponent;
  let fixture: ComponentFixture<CurrentAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
