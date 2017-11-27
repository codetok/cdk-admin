import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcardAreaComponent } from './dashcard-area.component';

describe('DashcardAreaComponent', () => {
  let component: DashcardAreaComponent;
  let fixture: ComponentFixture<DashcardAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashcardAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashcardAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
