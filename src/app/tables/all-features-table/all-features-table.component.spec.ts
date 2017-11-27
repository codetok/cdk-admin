import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFeaturesTableComponent } from './all-features-table.component';

describe('AllFeaturesTableComponent', () => {
  let component: AllFeaturesTableComponent;
  let fixture: ComponentFixture<AllFeaturesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFeaturesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFeaturesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
