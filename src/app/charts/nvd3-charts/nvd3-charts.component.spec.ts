import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Nvd3ChartsComponent } from './nvd3-charts.component';

describe('Nvd3ChartsComponent', () => {
  let component: Nvd3ChartsComponent;
  let fixture: ComponentFixture<Nvd3ChartsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Nvd3ChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nvd3ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
