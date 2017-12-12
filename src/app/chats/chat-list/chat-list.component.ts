import { Component, OnInit , Inject} from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  chats: any[];
  activeChat: any;

  chatName: string = 'demo';

  constructor(@Inject('ChatsService') private service) {
  }

  ngOnInit() {
    this.getChatsList();
  }

  getChatsList() {
    this.service.getChatsList().subscribe(chats => {
      this.chats = chats;
      this.activeChat = chats[0];
    });
  }

  createChat() {
    let d = {
      "picture": "assets/profile.png",
      "name": this.chatName,
      "messages": [
        {
          "message": "this is Angular 2 Exchange group",
          "when": 1,
          "who": "me"
        },
        {
          "message": "Recommended next Angular 2 What open source projects?",
          "when": 1,
          "who": "partner"
        }
      ],
      "lastMessageTime": 1,
      "lastMessage": "Technology Exchange"
    };
    this.service.createChat(d);
  }

  sendChat(chat) {
    this.service.updateChatMessage(chat.$key, chat);
  }

  onActiveChat(chat) {
    this.activeChat = chat;
  }

}
