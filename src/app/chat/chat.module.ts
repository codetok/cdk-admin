import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from "@angular/flex-layout";

import { 
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatChipsModule,
        MatCardModule,
        MatInputModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule
    } from '@angular/material';

import { FormsModule } from '@angular/forms';

import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { MessageSenderComponent } from './message-sender/message-sender.component';
import { MessageRecieverComponent } from './message-reciever/message-reciever.component';

export const ROUTES: Routes = [
   { path: 'chat', component: ChatComponent }, 
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ChatComponent, ChatListComponent, ChatBodyComponent, MessageSenderComponent, MessageRecieverComponent],
})
export class ChatModule { }
