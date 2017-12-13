import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterDeactivateComponent } from './router-deactivate.component';

describe('RouterDeactivateComponent', () => {
  let component: RouterDeactivateComponent;
  let fixture: ComponentFixture<RouterDeactivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterDeactivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
