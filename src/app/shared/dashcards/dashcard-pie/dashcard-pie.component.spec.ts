import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcardPieComponent } from './dashcard-pie.component';

describe('DashcardPieComponent', () => {
  let component: DashcardPieComponent;
  let fixture: ComponentFixture<DashcardPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashcardPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashcardPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
