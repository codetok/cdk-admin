import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeatureTableComponent } from './feature-table.component';

describe('FeatureTableComponent', () => {
  let component: FeatureTableComponent;
  let fixture: ComponentFixture<FeatureTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
