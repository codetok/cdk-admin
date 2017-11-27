import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatCardModule , MatButtonModule, MatIconModule,MatListModule} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { QuillModule } from 'ngx-quill';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EditorComponent } from './editor.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { ChartModule } from 'angular2-chartjs';
import { HttpModule } from '@angular/http';




export const ROUTES: Routes = [

   { path: 'editor', component: EditorComponent }, 

];

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
  		CommonModule,
        FlexLayoutModule,
        NgxChartsModule,
        HttpModule,

        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        QuillModule,
        RouterModule.forChild(ROUTES),
  ],
  exports: [],
  providers: []
})


export class EditorModule { }