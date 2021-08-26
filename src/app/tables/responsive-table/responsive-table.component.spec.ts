import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResponsiveTableComponent } from './responsive-table.component';

describe('ResponsiveTableComponent', () => {
  let component: ResponsiveTableComponent;
  let fixture: ComponentFixture<ResponsiveTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
