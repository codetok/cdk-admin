import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBodyComponent } from './chat-body.component';

describe('ChatBodyComponent', () => {
  let component: ChatBodyComponent;
  let fixture: ComponentFixture<ChatBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
