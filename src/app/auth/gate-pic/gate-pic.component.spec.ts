import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatePicComponent } from './gate-pic.component';

describe('GatePicComponent', () => {
  let component: GatePicComponent;
  let fixture: ComponentFixture<GatePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
