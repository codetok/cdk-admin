import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterTableComponent } from './filter-table/filter-table.component';



const materialWidgetRoutes: Routes = [
  	{ path: 'filter', component: FilterTableComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class TablesRouterModule {}