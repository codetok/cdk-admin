import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsComponent } from './ngx-charts.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GuageChartComponent } from './guage-chart/guage-chart.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    FlexLayoutModule
  ],
  declarations: [NgxChartsComponent, AreaChartComponent, DoughnutChartComponent, PieChartComponent, GuageChartComponent],
  exports:[NgxChartsComponent]
})
export class NgxChartModule { }
