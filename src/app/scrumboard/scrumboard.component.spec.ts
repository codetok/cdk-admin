import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumboardComponent } from './scrumboard.component';

describe('ScrumboardComponent', () => {
  let component: ScrumboardComponent;
  let fixture: ComponentFixture<ScrumboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
