import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWrapperValAccessorComponent } from './input-wrapper-val-accessor.component';

describe('InputWrapperValAccessorComponent', () => {
  let component: InputWrapperValAccessorComponent;
  let fixture: ComponentFixture<InputWrapperValAccessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWrapperValAccessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWrapperValAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
