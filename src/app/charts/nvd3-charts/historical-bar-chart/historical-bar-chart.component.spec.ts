import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalBarChartComponent } from './historical-bar-chart.component';

describe('HistoricalBarChartComponent', () => {
  let component: HistoricalBarChartComponent;
  let fixture: ComponentFixture<HistoricalBarChartComponent>;

  beforeEach(async(() => {
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
