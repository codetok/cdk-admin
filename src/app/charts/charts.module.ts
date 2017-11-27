import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartComponent } from './ngx-chart/ngx-chart.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Nvd3Component } from './nvd3/nvd3.component';
import { NvD3Module } from 'ng2-nvd3';
import { Nvd3ChartsModule } from '../shared/nvd3-charts/nvd3-charts.module';

import 'd3';
import 'nvd3';
import { ChartjsComponent } from './chartjs/chartjs.component';
export const ROUTES: Routes = [
	{ path: 'ngx-charts', component: NgxChartComponent },
	{ path: 'nvd3-charts', component: Nvd3Component },
  { path: 'chartjs', component: ChartjsComponent },]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    NvD3Module,
    FlexLayoutModule,
    Nvd3ChartsModule
  ],
  declarations: [NgxChartComponent, Nvd3Component, ChartjsComponent],
  

})
export class ChartsModule { }
