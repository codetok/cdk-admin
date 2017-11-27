import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { Nvd3BarChartComponent } from './bar-chart/bar-chart.component';
import { DirectGraphComponent } from './direct-graph/direct-graph.component';
import { SunburstChartComponent } from './sunburst-chart/sunburst-chart.component';
import { MultibarChartComponent } from './multibar-chart/multibar-chart.component';
import { Nvd3PieChartComponent } from './pie-chart/pie-chart.component';
@NgModule({
  imports: [
    CommonModule,
    NvD3Module,
  ],
  declarations: [
  	Nvd3BarChartComponent,
  	DirectGraphComponent,
  	Nvd3PieChartComponent,
    SunburstChartComponent,
    MultibarChartComponent
  ],
  exports:[
  	Nvd3BarChartComponent,
  	DirectGraphComponent,
  	Nvd3PieChartComponent,
    SunburstChartComponent,
    MultibarChartComponent
  ]
})
export class Nvd3ChartsModule { }
