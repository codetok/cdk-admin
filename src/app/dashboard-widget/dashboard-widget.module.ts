import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashcardComponent } from './dashcard/dashcard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule} from '@angular/material/chips';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { WeatherComponent } from './weather/weather.component';
import { SharePriceComponent } from './share-price/share-price.component';
import { RoundProgressbarComponent } from './round-progressbar/round-progressbar.component'; 
import { LineGraphComponent } from './line-graph/line-graph.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { DoughnutGraphComponent } from './doughnut-graph/doughnut-graph.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { SalesListComponent } from './sales-list/sales-list.component';
import { D3UsaComponent } from './d3-usa/d3-usa.component';
import { Ng9OdometerModule } from 'ng9-odometer';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { WorldMapComponent } from './world-map/world-map.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressBarModule,
    Ng9OdometerModule.forRoot(),
    NgxChartsModule,
    RoundProgressModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashcardComponent, 
    LineGraphComponent, 
    BarGraphComponent, 
    DoughnutGraphComponent, 
    ProfileCardComponent,
    PricingPlanComponent,
    WeatherComponent,
    SharePriceComponent,
    RoundProgressbarComponent,
    SalesListComponent,
    D3UsaComponent,
    WorldMapComponent
  
  ],
  exports: [
    DashcardComponent, 
    LineGraphComponent, 
    BarGraphComponent, 
    DoughnutGraphComponent, 
    ProfileCardComponent,
    PricingPlanComponent,
    WeatherComponent,
    SharePriceComponent,
    RoundProgressbarComponent,
    SalesListComponent,
    D3UsaComponent,
    WorldMapComponent
  ]
})
export class DashboardWidgetModule { }
