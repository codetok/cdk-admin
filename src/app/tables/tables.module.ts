import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Routes, RouterModule } from '@angular/router';
import { 
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatChipsModule,
        MatCardModule,
        MatInputModule,
        MatProgressBarModule,
        MatTableModule,
        MatTabsModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatTooltipModule,
    } from '@angular/material';

import { NgxCarouselModule } from 'ngx-carousel';
import { ChartModule } from 'angular2-chartjs';
import 'highlight.js/styles/github.css';
import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*components*/
import { FilterTableComponent } from '../tables/filter-table/filter-table.component';
import { PaginationTableComponent } from './pagination-table/pagination-table.component';
import { SortingTableComponent } from './sorting-table/sorting-table.component';
import { RetrieveHttpTableComponent } from './retrieve-http-table/retrieve-http-table.component';
import { AllFeaturesTableComponent } from './all-features-table/all-features-table.component';
import { FilterTableService } from './filter-table/filter-table.service';
import { PaginationTableService } from './pagination-table/pagination-table.service';
import { RetrieveHttpTableService } from './retrieve-http-table/retrieve-http-table.service';
import { SortingTableService } from './sorting-table/sorting-table.service';
import { AllFeaturesTableService } from './all-features-table/all-features-table.service';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { ResponsiveTableService } from './responsive-table/responsive-table.service';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';

export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}
export const ROUTES: Routes = [

    { path: 'filter-table', component: FilterTableComponent }, 
    { path: 'pagination-table', component: PaginationTableComponent },
    { path: 'sorting-table', component: SortingTableComponent }, 
    { path: 'retrive-http-table', component: RetrieveHttpTableComponent }, 
    { path: 'all-features-table', component: AllFeaturesTableComponent }, 
    { path: 'responsive-table', component: ResponsiveTableComponent }, 
 


];
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
        MatTableModule,
        MatTabsModule,
        MatPaginatorModule,
        MatSortModule,
        HttpModule,
        MatCheckboxModule,
        MatTooltipModule,
        FormsModule,
        ReactiveFormsModule,
        HighlightJsModule.forRoot({
            provide: HIGHLIGHT_JS,
            useFactory: highlightJsFactory
        }),

        RouterModule.forChild(ROUTES),

    ],
    entryComponents: [ViewDialogComponent],
    declarations: [ 
        FilterTableComponent,
        PaginationTableComponent,
        SortingTableComponent,
        RetrieveHttpTableComponent,
        AllFeaturesTableComponent,
        ResponsiveTableComponent,
        ViewDialogComponent,
    ],
    exports:[
        FilterTableComponent,
        PaginationTableComponent,
        SortingTableComponent,
        RetrieveHttpTableComponent,
        AllFeaturesTableComponent,
        ResponsiveTableComponent
    ],
    providers: [
        FilterTableService,
        PaginationTableService,
        RetrieveHttpTableService,
        SortingTableService,
        AllFeaturesTableService,
        ResponsiveTableService
    ]
})
export class TablesModule { }
