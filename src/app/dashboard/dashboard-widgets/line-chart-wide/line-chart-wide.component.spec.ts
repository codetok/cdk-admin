import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartWideComponent } from './line-chart-wide.component';

describe('LineChartWideComponent', () => {
  let component: LineChartWideComponent;
  let fixture: ComponentFixture<LineChartWideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartWideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
