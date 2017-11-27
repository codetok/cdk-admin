import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from './buttons/buttons.component';
import { 
         MatButtonModule,
         MatToolbarModule,
         MatTabsModule,
         MatAutocompleteModule,
         MatCardModule,
         MatTableModule,
         MatCheckboxModule,
         MatIconModule,
         MatSelectModule,
         MatFormFieldModule,
         MatSlideToggleModule,
         MatMenuModule,
         MatProgressBarModule,
         MatInputModule,
         MatListModule,
         MatStepperModule,
         MatExpansionModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatProgressSpinnerModule,
         MatRadioModule,
         MatSliderModule,
         

        } from '@angular/material';


import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { TableComponent } from './table/table.component';
import 'highlight.js/styles/github.css';
import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { InputComponent } from './input/input.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { SelectComponent } from './select/select.component';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { CardComponent } from '../shared/card/card.component';
import { CardsComponent } from './cards/cards.component';
import { IconComponent } from './icon/icon.component';


export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

export const ROUTES: Routes = [

   { path: 'buttons', component: ButtonsComponent }, 
   { path: 'inputs', component: InputComponent },
   { path: 'radio', component: RadiobuttonComponent },
   { path: 'select', component: SelectComponent },
   { path: 'autocomplete', component: AutocompleteComponent },
   { path: 'checkbox', component: CheckboxComponent }, 
   { path: 'datepicker', component: DatepickerComponent }, 
   { path: 'slider', component: SliderComponent }, 
   { path: 'slide-toggle', component: SlideToggleComponent }, 
   { path: 'menu', component: MenuComponent }, 
   { path: 'progress-bar', component: ProgressBarComponent }, 
   { path: 'list', component: ListComponent },
   { path: 'stepper', component: StepperComponent },
   { path: 'expansion', component: ExpansionComponent },
   { path: 'spinner', component: ProgressSpinnerComponent },
   { path: 'cards', component: CardsComponent },
   { path: 'icon', component: IconComponent },
   { path: 'spinner', component: ProgressSpinnerComponent },

];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatNativeDateModule,
    MatSlideToggleModule, 
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatIconModule,
   

    MatSliderModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatMenuModule,
    MatListModule,
    MatProgressBarModule,
    MatInputModule,
    MatListModule,
    MatStepperModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }),

    RouterModule.forChild(ROUTES),
  ],
  declarations: [
      ButtonsComponent,
      TableComponent,
      InputComponent,
      RadiobuttonComponent,
      SelectComponent,
      AutocompleteComponent,
      CheckboxComponent,
      DatepickerComponent,
      SliderComponent,
      SlideToggleComponent,
      MenuComponent,
      ProgressBarComponent,
      ListComponent,
      StepperComponent,
      ExpansionComponent,
      ProgressSpinnerComponent,
      CardsComponent,
      IconComponent,
     

  ],
  exports: [
    ButtonsComponent,
    TableComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent
  ]
})
export class MaterialWidgetsModule { }
