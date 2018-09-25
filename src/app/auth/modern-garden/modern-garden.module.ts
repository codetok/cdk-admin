import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModernGardenComponent } from './modern-garden.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { DashboardWidgetModule } from '../../dashboard-widget/dashboard-widget.module';
import {SlideshowModule} from 'ng-simple-slideshow';
//import {CardsComponent} from '../../material-widgets/cards/cards.component'

export const appRoutes: Routes = [
    { path: '', component: ModernGardenComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FlexLayoutModule,
    MatCardModule,
    DashboardWidgetModule,
    SlideshowModule
  //  CardsComponent
  ],
  declarations: [ModernGardenComponent],
  exports: [ ]
})
export class ModernGardenModule { }
