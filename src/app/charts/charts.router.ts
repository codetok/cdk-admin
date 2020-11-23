import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component'
import { ChartjsComponent } from './chartjs/chartjs.component';
// import { Nvd3ChartsComponent } from './nvd3-charts/nvd3-charts.component';
const chartRoutes: Routes = [
	{ path: 'ngx-charts', component: NgxChartsComponent, data: { animation: 'ngx-charts' }},
	{ path: 'chartjs', component: ChartjsComponent ,data: { animation: 'chartjs' }},
	// { path: 'nvd3-charts', component: Nvd3ChartsComponent ,data: { animation: 'nvd3-charts' }},
];

@NgModule({
	imports: [
		RouterModule.forChild(chartRoutes),
		
	],
	exports: [
		RouterModule
	]
})
export class ChartsRouterModule { }