import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterTableComponent } from './filter-table/filter-table.component';

import { FeatureTableComponent } from './feature-table/feature-table.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'filter', component: FilterTableComponent },
  	{ path: 'featured', component: FeatureTableComponent },
  	{ path: 'responsive', component: ResponsiveTableComponent }
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