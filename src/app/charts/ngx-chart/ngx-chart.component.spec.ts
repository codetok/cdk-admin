import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartComponent } from './ngx-chart.component';

describe('NgxChartComponent', () => {
  let component: NgxChartComponent;
  let fixture: ComponentFixture<NgxChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
