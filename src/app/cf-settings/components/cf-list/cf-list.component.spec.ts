import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfListComponent } from './cf-list.component';

describe('CfListComponent', () => {
  let component: CfListComponent;
  let fixture: ComponentFixture<CfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
