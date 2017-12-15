import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { MailComponent } from './mail/mail.component';
import { ComposeComponent } from './compose/compose.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MailService } from './mail.service';
import { MailRoutingModule } from './mail.routing';
import { 
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSnackBarModule
       } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';  

@NgModule({
  imports: [
    MailRoutingModule,
    QuillModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    HttpModule,
    CoreModule,
    CommonModule
  ],
  entryComponents: [
    ComposeComponent,
  ],
  declarations: [
    MailComponent,
    ComposeComponent,
    DetailComponent,
    ListComponent,
    ToolbarComponent,
    SearchbarComponent
  ],
  providers: [
    { provide: 'mailService', useClass: MailService }
  ]
})
export class MailModule {
}
