import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarUtilsModule } from './calender-utils.module';
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
export const ROUTES: Routes = [
   { path: 'calendar', component: CalendarComponent }, 
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    CalendarUtilsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [CalendarComponent],
  exports: [CalendarComponent]
})
export class CalendarsModule { }
