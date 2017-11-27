import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSenderBlockComponent } from './chat-sender-block.component';

describe('ChatSenderBlockComponent', () => {
  let component: ChatSenderBlockComponent;
  let fixture: ComponentFixture<ChatSenderBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSenderBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSenderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
