/*
    //core modules -- angular styleguide 
    
    put application-wide, single use components in the CoreModule
    collecting numerous,single-use classes inside a core module to simplify the apparent structure of a feature module.
    
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatSidenavModule,
         MatChipsModule, 
         MatListModule, 
         MatRippleModule,
         MatInputModule,
         MatToolbarModule, 
         MAT_PLACEHOLDER_GLOBAL_OPTIONS,
         MatButtonModule,
         MatTabsModule,
         MatIconModule,
         MatMenuModule } from '@angular/material';
import { LogoBarComponent } from './logo-bar/logo-bar.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { SearchComponentsComponent } from './search-components/search-components.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatChipsModule,
    MatListModule,
    MatRippleModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTabsModule,
    RouterModule,
    MatMenuModule,
    
  ],
  declarations: [
                  SideMenuComponent,
                  LogoBarComponent, 
                  UserMenuComponent,
                  SearchComponentsComponent,
                  SearchComponentsComponent,
                  NotificationSidebarComponent
                ],
  exports:      [
                  SideMenuComponent,
                  LogoBarComponent,
                  UserMenuComponent,
                  SearchComponentsComponent,
                  NotificationSidebarComponent
                ],
  providers: [
    {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'never'}}
  ],
})
export class CoreModule { }
