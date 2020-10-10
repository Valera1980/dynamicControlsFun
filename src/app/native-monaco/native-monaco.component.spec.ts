import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeMonacoComponent } from './native-monaco.component';

describe('NativeMonacoComponent', () => {
  let component: NativeMonacoComponent;
  let fixture: ComponentFixture<NativeMonacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeMonacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeMonacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
