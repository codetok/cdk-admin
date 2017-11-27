import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRecieverBlockComponent } from './chat-reciever-block.component';

describe('ChatRecieverBlockComponent', () => {
  let component: ChatRecieverBlockComponent;
  let fixture: ComponentFixture<ChatRecieverBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRecieverBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRecieverBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
