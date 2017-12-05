import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundProgressbarComponent } from './round-progressbar.component';

describe('RoundProgressbarComponent', () => {
  let component: RoundProgressbarComponent;
  let fixture: ComponentFixture<RoundProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
