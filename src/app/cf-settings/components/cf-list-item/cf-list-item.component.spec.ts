import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfListItemComponent } from './cf-list-item.component';

describe('CfListItemComponent', () => {
  let component: CfListItemComponent;
  let fixture: ComponentFixture<CfListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
