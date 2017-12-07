import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { StepperComponent } from './stepper/stepper.component';


const materialWidgetRoutes: Routes = [
  	{ path: 'buttons', component:  ButtonsComponent },
  	{ path: 'stepper', component: StepperComponent},
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