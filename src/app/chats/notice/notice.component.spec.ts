import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeComponent } from './notice.component';

describe('NoticeComponent', () => {
  let component: NoticeComponent;
  let fixture: ComponentFixture<NoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
