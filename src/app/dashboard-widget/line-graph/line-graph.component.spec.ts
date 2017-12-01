import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGraphComponent } from './line-graph.component';

describe('LineGraphComponent', () => {
  let component: LineGraphComponent;
  let fixture: ComponentFixture<LineGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
