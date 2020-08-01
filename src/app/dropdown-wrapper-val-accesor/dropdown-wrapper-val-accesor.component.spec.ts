import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownWrapperValAccesorComponent } from './dropdown-wrapper-val-accesor.component';

describe('DropdownWrapperValAccesorComponent', () => {
  let component: DropdownWrapperValAccesorComponent;
  let fixture: ComponentFixture<DropdownWrapperValAccesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownWrapperValAccesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownWrapperValAccesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
