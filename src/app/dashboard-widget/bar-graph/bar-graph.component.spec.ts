import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphComponent } from './bar-graph.component';

describe('BarGraphComponent', () => {
  let component: BarGraphComponent;
  let fixture: ComponentFixture<BarGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
