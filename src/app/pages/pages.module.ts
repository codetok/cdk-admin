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
        MatFormFieldModule,
    } from '@angular/material';

import { NgxCarouselModule } from 'ngx-carousel';
import { ChartModule } from 'angular2-chartjs';
import 'highlight.js/styles/github.css';
import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import {HttpModule} from '@angular/http';

// Component
import { LoginComponent } from "../pages/login/login.component";
import { RegisterationComponent } from './registeration/registeration.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';

export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}
export const ROUTES: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterationComponent }, 
    { path: 'services', component: ServicesComponent },
    { path: 'contacts', component: ContactsComponent },

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
        MatFormFieldModule,
        MatCheckboxModule,
        MatTooltipModule,
        HighlightJsModule.forRoot({
            provide: HIGHLIGHT_JS,
            useFactory: highlightJsFactory
        }),

        RouterModule.forChild(ROUTES),

    ],
    declarations: [ 
    	LoginComponent,
        RegisterationComponent,
        ServicesComponent,
        ContactsComponent,
          ],
    exports:[
    	LoginComponent,
        RegisterationComponent,
        ServicesComponent,
    ],
        
    providers: [
        
    ]
})
export class PagesModule { }
