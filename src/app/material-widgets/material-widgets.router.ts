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