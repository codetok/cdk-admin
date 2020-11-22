import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumboardComponent } from './scrumboard.component';
import { Routes, RouterModule } from '@angular/router';
// import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
export const ROUTES: Routes = [
   { path: '', component: ScrumboardComponent }, 
];
@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule
  ],
  declarations: [ScrumboardComponent]
})
export class ScrumboardModule { }
