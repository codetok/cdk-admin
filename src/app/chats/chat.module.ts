import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChatRouterModule } from './chat.router';
// import * as hljs from 'highlight.js';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
// import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NoticeComponent } from './notice/notice.component';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
// import {
    // PerfectScrollbarModule, 
    // PERFECT_SCROLLBAR_CONFIG,
    // PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ChatsService } from './chats.service';
import { environment } from '../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export function highlightJsFactory(): any {
  return {
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    languages: {
      typescript: () => import('highlight.js/lib/languages/typescript')}
  }
}

@NgModule({
    imports: [
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    // PerfectScrollbarModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HighlightModule,
    ChatRouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ],
    declarations: [
        ChatComponent,
        ChatListComponent,
        ContactsComponent,
        NoticeComponent,
    ],
    exports: [
    ],
    // entryComponents: [
    //     NoticeComponent
    // ],
    providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useFactory: highlightJsFactory,
    },
    {
        provide: 'ChatsService', useClass: ChatsService
    },
  ]

})
export class ChatsModule { }


