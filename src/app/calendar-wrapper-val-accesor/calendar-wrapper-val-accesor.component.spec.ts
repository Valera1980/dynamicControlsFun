import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWrapperValAccesorComponent } from './calendar-wrapper-val-accesor.component';

describe('CalendarWrapperValAccesorComponent', () => {
  let component: CalendarWrapperValAccesorComponent;
  let fixture: ComponentFixture<CalendarWrapperValAccesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarWrapperValAccesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarWrapperValAccesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
