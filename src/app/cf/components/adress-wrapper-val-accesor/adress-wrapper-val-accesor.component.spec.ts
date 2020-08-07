import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressWrapperValAccesorComponent } from './adress-wrapper-val-accesor.component';

describe('AdressWrapperValAccesorComponent', () => {
  let component: AdressWrapperValAccesorComponent;
  let fixture: ComponentFixture<AdressWrapperValAccesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressWrapperValAccesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressWrapperValAccesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
