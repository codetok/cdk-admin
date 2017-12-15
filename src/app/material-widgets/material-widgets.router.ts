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
import { RadioComponent } from './radio/radio.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SliderComponent } from './slider/slider.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'buttons', component:  ButtonsComponent },
    { path: 'list', component:  ListComponent },
    { path: 'stepper', component: StepperComponent},
    { path: 'expansion', component: ExpansionPanelComponent},
    { path: 'spinner', component: SpinnerComponent},
    { path: 'cards', component: CardsComponent},
    { path: 'icons', component: IconsComponent },
    { path: 'autocomplete', component: AutocompleteComponent },
    { path: 'checkbox', component:  CheckboxComponent },
    { path: 'radio', component:  RadioComponent },
    { path: 'datepicker', component:  DatepickerComponent },
    { path: 'slider', component:  SliderComponent },
    { path: 'slide-toggle', component:  SlidetoggleComponent },
    { path: 'progress-bar', component:  ProgressbarComponent },
    { path: '', redirectTo: '/buttons', pathMatch: 'full'}
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