import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcardHorizontalComponent } from './dashcard-horizontal.component';

describe('DashcardHorizontalComponent', () => {
  let component: DashcardHorizontalComponent;
  let fixture: ComponentFixture<DashcardHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashcardHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashcardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
