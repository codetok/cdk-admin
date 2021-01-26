import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardAccountsComponent } from './dashboard-accounts.component';

describe('DashboardAccountsComponent', () => {
  let component: DashboardAccountsComponent;
  let fixture: ComponentFixture<DashboardAccountsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
