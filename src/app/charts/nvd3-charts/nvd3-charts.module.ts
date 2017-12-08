import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nvd3ChartsComponent } from './nvd3-charts.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import 'd3';
import 'nvd3';
import { NvD3Module } from 'ng2-nvd3';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SunburstChartComponent } from './sunburst-chart/sunburst-chart.component';
import { HistoricalBarChartComponent } from './historical-bar-chart/historical-bar-chart.component';
@NgModule({
  imports: [
    CommonModule,
    NvD3Module,
    FlexLayoutModule
  ],
  declarations: [Nvd3ChartsComponent, BarChartComponent, PieChartComponent, SunburstChartComponent, HistoricalBarChartComponent]
})
export class Nvd3ChartsModule { }
