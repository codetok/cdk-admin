import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MailComponent } from './mail/mail.component';
import { ComposeComponent } from './compose/compose.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MailService } from './mail.service';
import { MailRoutingModule } from './mail.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';  

@NgModule({
  imports: [
    MailRoutingModule,
    QuillModule.forRoot(),
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
    HttpClientModule,
    CoreModule,
    CommonModule
  ],
  // entryComponents: [
  //   ComposeComponent,
  // ],
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
