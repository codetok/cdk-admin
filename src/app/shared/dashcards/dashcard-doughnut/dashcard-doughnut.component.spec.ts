import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcardDoughnutComponent } from './dashcard-doughnut.component';

describe('DashcardDoughnutComponent', () => {
  let component: DashcardDoughnutComponent;
  let fixture: ComponentFixture<DashcardDoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashcardDoughnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashcardDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
