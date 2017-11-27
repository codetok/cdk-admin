import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSidebarComponent } from './notification-sidebar.component';

describe('NotificationSidebarComponent', () => {
  let component: NotificationSidebarComponent;
  let fixture: ComponentFixture<NotificationSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
