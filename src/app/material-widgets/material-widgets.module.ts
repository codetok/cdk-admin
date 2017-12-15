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
         MatAutocompleteModule,
         MatCheckboxModule,
         MatSlideToggleModule,


         MatSelectModule,

         


         MatProgressBarModule,
         MatMenuModule,

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
import { IconsComponent } from './icons/icons.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
//import { SelectComponent } from './select/select.component';

import { DatepickerComponent } from './datepicker/datepicker.component';
import { SliderComponent } from './slider/slider.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';



export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
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
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressBarModule,
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
    CardsComponent,
    IconsComponent,
    AutocompleteComponent,
    CheckboxComponent,

    SelectComponent,

    DatepickerComponent,
    SliderComponent,
    SlidetoggleComponent,
    MenuComponent,
    ProgressbarComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    


    ],

  exports: [
    ]
      
})
export class MaterialWidgetsModule { }