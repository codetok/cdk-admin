import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxChartsComponent } from './ngx-charts.component';

describe('NgxChartsComponent', () => {
  let component: NgxChartsComponent;
  let fixture: ComponentFixture<NgxChartsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
