import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GuageChartComponent } from './guage-chart.component';

describe('GuageChartComponent', () => {
  let component: GuageChartComponent;
  let fixture: ComponentFixture<GuageChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuageChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
