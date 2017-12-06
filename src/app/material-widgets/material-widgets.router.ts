import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'buttons', component:  ButtonsComponent },
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