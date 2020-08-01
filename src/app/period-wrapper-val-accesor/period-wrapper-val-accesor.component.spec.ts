import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodWrapperValAccesorComponent } from './period-wrapper-val-accesor.component';

describe('PeriodWrapperValAccesorComponent', () => {
  let component: PeriodWrapperValAccesorComponent;
  let fixture: ComponentFixture<PeriodWrapperValAccesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodWrapperValAccesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodWrapperValAccesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
