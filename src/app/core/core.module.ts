import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './sidemenu-item/sidemenu-item.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router'; 
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarNotificationComponent } from './toolbar-notification/toolbar-notification.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    RouterModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    MatToolbarModule    
  ],
  declarations: [SidemenuComponent, SidemenuItemComponent, ToolbarNotificationComponent, ToolbarComponent],
  exports: [SidemenuComponent, SidemenuItemComponent, ToolbarNotificationComponent, ToolbarComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]  
})
export class CoreModule { }
