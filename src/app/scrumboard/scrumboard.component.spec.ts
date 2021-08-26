import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScrumboardComponent } from './scrumboard.component';

describe('ScrumboardComponent', () => {
  let component: ScrumboardComponent;
  let fixture: ComponentFixture<ScrumboardComponent>;

  beforeEach(waitForAsync(() => {
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
