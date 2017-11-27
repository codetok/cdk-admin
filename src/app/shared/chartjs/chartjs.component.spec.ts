import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsComponent } from './chartjs.component';

describe('ChartjsComponent', () => {
  let component: ChartjsComponent;
  let fixture: ComponentFixture<ChartjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
