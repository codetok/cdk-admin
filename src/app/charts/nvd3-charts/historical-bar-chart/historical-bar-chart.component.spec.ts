import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HistoricalBarChartComponent } from './historical-bar-chart.component';

describe('HistoricalBarChartComponent', () => {
  let component: HistoricalBarChartComponent;
  let fixture: ComponentFixture<HistoricalBarChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
