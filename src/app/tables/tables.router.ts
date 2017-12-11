import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedTableComponent } from './fixed-table/fixed-table.component';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'fixed', component: FixedTableComponent },
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