import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComposeComponent } from './compose.component';

describe('ComposeComponent', () => {
  let component: ComposeComponent;
  let fixture: ComponentFixture<ComposeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
