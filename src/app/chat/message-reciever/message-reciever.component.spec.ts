import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRecieverComponent } from './message-reciever.component';

describe('MessageRecieverComponent', () => {
  let component: MessageRecieverComponent;
  let fixture: ComponentFixture<MessageRecieverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageRecieverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
