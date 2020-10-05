import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfFormComponent } from './cf-form.component';

describe('CfFormComponent', () => {
  let component: CfFormComponent;
  let fixture: ComponentFixture<CfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
