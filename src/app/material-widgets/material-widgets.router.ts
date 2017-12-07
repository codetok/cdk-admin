import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { ListComponent } from './list/list.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'buttons', component:  ButtonsComponent },
  	{ path: 'list', component:  ListComponent },
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