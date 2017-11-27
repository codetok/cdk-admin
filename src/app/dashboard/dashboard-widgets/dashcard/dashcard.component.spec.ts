import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcardComponent } from './dashcard.component';

describe('DashcardComponent', () => {
  let component: DashcardComponent;
  let fixture: ComponentFixture<DashcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
