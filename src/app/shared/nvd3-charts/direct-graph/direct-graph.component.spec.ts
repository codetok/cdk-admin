import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectGraphComponent } from './direct-graph.component';

describe('DirectGraphComponent', () => {
  let component: DirectGraphComponent;
  let fixture: ComponentFixture<DirectGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
