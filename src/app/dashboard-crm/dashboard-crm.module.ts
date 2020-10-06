import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCrmComponent } from './dashboard-crm.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardWidgetModule } from '../dashboard-widget/dashboard-widget.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';

import {MatTabsModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {DialogComponent } from '../auth/faq/dialog/dialog.component';
import {Pro1dialogComponent } from '../auth/faq/pro1dialog/pro1dialog.component';
import {Pro2dialogComponent } from '../auth/faq/pro2dialog/pro2dialog.component';
import {Pro3dialogComponent } from '../auth/faq/pro3dialog/pro3dialog.component';
import {Shareproduct1Component } from '../auth/faq/shareproduct1/shareproduct1.component';

import {SlideshowModule} from 'ng-simple-slideshow';
import { SliderModule } from 'angular-image-slider';






export const appRoutes: Routes = [
    { path: '', component: DashboardCrmComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FlexLayoutModule,
    MatCardModule,
    DashboardWidgetModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    SlideshowModule,
    SliderModule

  ],
  declarations: [DashboardCrmComponent, ],
  exports: [ ],
  entryComponents: [DialogComponent, Pro1dialogComponent, Shareproduct1Component, Pro2dialogComponent , Pro3dialogComponent]
})
export class DashboardCrmModule { }
