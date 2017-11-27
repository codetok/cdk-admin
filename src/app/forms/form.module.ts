import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatButtonModule,MatToolbarModule,MatCardModule ,MatTabsModule , MatIconModule,} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import * as hljs from 'highlight.js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';

export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}
export const ROUTES: Routes = [

    { path:'template_driven', component: TemplateDrivenComponent },
    { path:'reactive_forms', component: ReactiveFormsComponent }]
   
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    HighlightJsModule.forRoot({
            provide: HIGHLIGHT_JS,
            useFactory: highlightJsFactory
        }),
  ],
  declarations: [TemplateDrivenComponent, ReactiveFormsComponent]
})
export class FormModule { }
