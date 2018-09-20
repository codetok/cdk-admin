import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material';
import { MatSnackBarModule,MatDialogModule } from '@angular/material';
//import {MatDialog, MatDialogRef,} from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { appRoutes } from './lazyloader.routes';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

import { DashboardCrmModule } from '../dashboard-crm/dashboard-crm.module';
import {MaterialWidgetsModule} from '../material-widgets/material-widgets.module';

import { CoreModule } from '../core/core.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ModernGardenComponent } from './modern-garden/modern-garden.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
//import {CardsComponent} from './cards/cards.component';

import { MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    MatMenuModule,
    


} from '@angular/material';
import { GateExampleComponent } from './gate-example/gate-example.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        MatToolbarModule,
        DashboardCrmModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        CoreModule,
        MatSidenavModule,
        PerfectScrollbarModule,
        MaterialWidgetsModule,
        MatCardModule,
        MatSnackBarModule,
        MatDialogModule,
        MatSlideToggleModule,
        //MatDialog, 
        //MatDialogRef,

        
    ],
    entryComponents: [
        GateExampleComponent,
    ],
    declarations: [AuthComponent, AboutUsComponent, ModernGardenComponent, ShoppingCartComponent, GateExampleComponent],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class AuthModule { }
