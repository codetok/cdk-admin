import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3DonutChartComponent } from './d3-donut-chart.component';

describe('D3DonutChartComponent', () => {
  let component: D3DonutChartComponent;
  let fixture: ComponentFixture<D3DonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3DonutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3DonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
