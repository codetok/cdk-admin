import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CardsComponent } from './cards/cards.component';
import { IconsComponent } from './icons/icons.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SliderComponent } from './slider/slider.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { MenuComponent } from './menu/menu.component';


const materialWidgetRoutes: Routes = [
  	{ path: 'buttons', component:  ButtonsComponent , data: { animation: 'buttons' }},
    { path: 'list', component:  ListComponent , data: { animation: 'list' }},
    { path: 'stepper', component: StepperComponent ,data: { animation: 'stepper' } },
    { path: 'expansion', component: ExpansionPanelComponent , data: { animation: 'expansion' }},
    { path: 'spinner', component: SpinnerComponent ,data: { animation: 'spinner' } },
    { path: 'cards', component: CardsComponent ,data: { animation: 'cards' } },
    { path: 'icons', component: IconsComponent , data: { animation: 'icons' }},
    { path: 'autocomplete', component: AutocompleteComponent , data: { animation: 'autocomplete' }},
    { path: 'checkbox', component:  CheckboxComponent , data: { animation: 'checkbox' }},
    
    { path: 'select', component:  SelectComponent ,data: { animation: 'select' } },
    { path: 'input', component:  InputComponent , data: { animation: 'input' }},
    { path: 'radio', component:  RadioComponent , data: { animation: 'radio' }},
    { path: 'datepicker', component:  DatepickerComponent , data: { animation: 'datepicker' }},
    { path: 'slider', component:  SliderComponent , data: { animation: 'slider' }},
    { path: 'slide-toggle', component:  SlidetoggleComponent ,data: { animation: 'slide-toggle' } },


    { path: 'progress-bar', component:  ProgressbarComponent , data: { animation: 'progress-bar' }},
    { path: 'menu', component:  MenuComponent ,data: { animation: 'menu' } },

    { path: '', redirectTo: '/buttons', pathMatch: 'full',}
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MaterialWidgetsRouterModule {}