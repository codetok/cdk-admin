import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GateExampleComponent } from './gate-example.component';

describe('GateExampleComponent', () => {
  let component: GateExampleComponent;
  let fixture: ComponentFixture<GateExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GateExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
