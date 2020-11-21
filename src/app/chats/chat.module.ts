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

import {
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
} from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ChatsService } from './chats.service';
import { environment } from '../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// export function highlightJsFactory(): any {
//   hljs.registerLanguage('typescript', hljsTypescript);
//   return hljs;
// }

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
    PerfectScrollbarModule,
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
    entryComponents: [
        NoticeComponent
    ],
    providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript')}
      }
    },
    {
        provide: 'ChatsService', useClass: ChatsService
    },
  ]

})
export class ChatsModule { }


