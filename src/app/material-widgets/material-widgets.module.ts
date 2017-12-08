import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatProgressSpinnerModule,
         MatRadioModule,
         MatSliderModule,
         MatCardModule,
 } from '@angular/material';


import { MaterialWidgetsRouterModule } from './material-widgets.router';

import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { ListComponent } from './list/list.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CardsComponent } from './cards/cards.component';


export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
    MatRadioModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }),
    MaterialWidgetsRouterModule
  ],
  declarations: [
    ButtonsComponent,
    ListComponent,

    StepperComponent,
    ExpansionPanelComponent,
    SpinnerComponent,
    CardsComponent],

  exports: [
    ]
      
})
export class MaterialWidgetsModule { }