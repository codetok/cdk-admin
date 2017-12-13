import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardedRoutesComponent } from './guarded-routes.component';

describe('GuardedRoutesComponent', () => {
  let component: GuardedRoutesComponent;
  let fixture: ComponentFixture<GuardedRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardedRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardedRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
