import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTableComponent } from './feature-table.component';

describe('FeatureTableComponent', () => {
  let component: FeatureTableComponent;
  let fixture: ComponentFixture<FeatureTableComponent>;

  beforeEach(async(() => {
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
