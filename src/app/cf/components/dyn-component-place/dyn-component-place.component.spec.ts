import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynComponentPlaceComponent } from './dyn-component-place.component';

describe('DynComponentPlaceComponent', () => {
  let component: DynComponentPlaceComponent;
  let fixture: ComponentFixture<DynComponentPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynComponentPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynComponentPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
