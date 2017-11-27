import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartSmallComponent } from './line-chart-small.component';

describe('LineChartSmallComponent', () => {
  let component: LineChartSmallComponent;
  let fixture: ComponentFixture<LineChartSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
