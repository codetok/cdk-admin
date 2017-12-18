import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumboardComponent } from './scrumboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { 
        MatToolbarModule,
        MatListModule,
        MatCardModule
    } from '@angular/material';
export const ROUTES: Routes = [
   { path: '', component: ScrumboardComponent }, 
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DndModule.forRoot(),
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule
  ],
  declarations: [ScrumboardComponent]
})
export class ScrumboardModule { }
