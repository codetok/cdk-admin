import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TablesRouterModule } from './tables.router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';


// import * as hljs from 'highlight.js';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
// import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { FixedTableComponent } from './fixed-table/fixed-table.component';

export function highlightJsFactory(): any {
  return {
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    languages: {
      typescript: () => import('highlight.js/lib/languages/typescript')}
  }
}

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    HighlightModule,
    TablesRouterModule
  ],
  declarations: [
   FilterTableComponent,
   FeatureTableComponent,
   ResponsiveTableComponent,
   FixedTableComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useFactory: highlightJsFactory,
    }
  ],
  exports: [
    ]
      
})
export class TablesModule { }


