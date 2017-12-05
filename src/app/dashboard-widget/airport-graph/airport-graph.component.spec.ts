import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportGraphComponent } from './airport-graph.component';

describe('AirportGraphComponent', () => {
  let component: AirportGraphComponent;
  let fixture: ComponentFixture<AirportGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
