import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NvD3Module } from 'ng2-nvd3';
import { FormsModule } from '@angular/forms';

import { 
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatChipsModule,
        MatCardModule,
        MatInputModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTableModule,

    } from '@angular/material';

import { DashcardPieComponent } from './dashcards/dashcard-pie/dashcard-pie.component';
import { DashcardDoughnutComponent } from './dashcards/dashcard-doughnut/dashcard-doughnut.component';
import { DashcardHorizontalComponent } from './dashcards/dashcard-horizontal/dashcard-horizontal.component';
import { DashcardAreaComponent } from './dashcards/dashcard-area/dashcard-area.component';

import { PieChartComponent } from './ngx-charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './ngx-charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './ngx-charts/line-chart/line-chart.component';
import { DoughnutChartComponent } from './ngx-charts/doughnut-chart/doughnut-chart.component';
import { HorizontalChartComponent } from './ngx-charts/horizontal-chart/horizontal-chart.component';
import { GaugeChartComponent } from './ngx-charts/gauge-chart/gauge-chart.component';
import { AreaChartComponent } from './ngx-charts/area-chart/area-chart.component';

import { Nvd3ChartsModule  } from './nvd3-charts/nvd3-charts.module';


import { MorisLineChartComponent } from './moris-charts/line-chart/line-chart.component';


import { FeedsComponent } from './feeds/feeds.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { CardComponent } from './card/card.component';
import { CustomerSatisfactionComponent } from './customer-satisfaction/customer-satisfaction.component';


import { ChatSenderBlockComponent } from './chat/chat-sender-block/chat-sender-block.component';
import { ChatRecieverBlockComponent } from './chat/chat-reciever-block/chat-reciever-block.component';
import { ChartModule } from 'angular2-chartjs';


import { MessagesComponent } from './new-messages/new-messages.component';
import { PipesModule } from './pipes/pipes.module';


import 'd3';
import 'nvd3';
import { ChartJsComponent } from './chartjs/chartjs.component';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgxChartsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
    NgxCarouselModule,
    MatCardModule,
    MatProgressBarModule,
    ChartModule,
    MatInputModule,
    FormsModule,
    NvD3Module,    
    MatDialogModule  ,
    MatTableModule,
    PipesModule,
    Nvd3ChartsModule

  ],
  declarations: [ 
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    DashcardPieComponent,
    DoughnutChartComponent,
    DashcardDoughnutComponent,
    DashcardHorizontalComponent,
    HorizontalChartComponent,
    GaugeChartComponent,
    AreaChartComponent,
    DashcardAreaComponent,
    FeedsComponent,
    WeatherCardComponent,
    SliderCardComponent,
    CardComponent,
    CustomerSatisfactionComponent,
    
    ChatSenderBlockComponent,
    ChatRecieverBlockComponent,
    MorisLineChartComponent,
    MessagesComponent,
    ChartJsComponent,


     ],
  exports:[
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    DashcardPieComponent,
    DoughnutChartComponent,
    DashcardDoughnutComponent,
    DashcardHorizontalComponent,
    HorizontalChartComponent,
    AreaChartComponent,
    DashcardAreaComponent,
    FeedsComponent,
    GaugeChartComponent,
    WeatherCardComponent,
    SliderCardComponent,
    CardComponent,
    CustomerSatisfactionComponent,
    
    ChartJsComponent,
    ChatSenderBlockComponent,
    ChatRecieverBlockComponent,
    MorisLineChartComponent,
    MessagesComponent,
    
  ],
  
})
export class SharedModule { }
