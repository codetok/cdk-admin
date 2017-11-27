import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCardComponent } from './slider-card.component';

describe('SliderCardComponent', () => {
  let component: SliderCardComponent;
  let fixture: ComponentFixture<SliderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
