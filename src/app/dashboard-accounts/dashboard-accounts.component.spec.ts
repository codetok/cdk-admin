import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAccountsComponent } from './dashboard-accounts.component';

describe('DashboardAccountsComponent', () => {
  let component: DashboardAccountsComponent;
  let fixture: ComponentFixture<DashboardAccountsComponent>;

  beforeEach(async(() => {
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
