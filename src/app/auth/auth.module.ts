import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material';
import { MatSnackBarModule, MatDialogModule } from '@angular/material';



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
import {SlideshowModule} from 'ng-simple-slideshow';
import { SliderModule } from 'angular-image-slider';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { MatFormFieldModule } from '@angular/material';
//import { MatInputModule } from '@angular/material';

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
import {CanvasWhiteboardModule} from 'ng2-canvas-whiteboard';





import { HttpClientModule } from '@angular/common/http';





import {MatFormFieldModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';













//import {MatDividerModule} from '@angular/material/divider';






import { FAQComponent } from './faq/faq.component';

import { MyFavouritesComponent } from './my-favourites/my-favourites.component';
import { MatChipsModule } from '@angular/material/chips';

import { DialogComponent } from './faq/dialog/dialog.component';

import { Pro1dialogComponent } from './faq/pro1dialog/pro1dialog.component';
import { Shareproduct1Component } from './faq/shareproduct1/shareproduct1.component';
import { Pro2dialogComponent } from './faq/pro2dialog/pro2dialog.component';
import { Pro3dialogComponent } from './faq/pro3dialog/pro3dialog.component';
import { ContactComponent } from './contact/contact.component';
import { AddeddialogComponent } from './faq/addeddialog/addeddialog.component';
import { SendfaqsuccessComponent } from './faq/sendfaqsuccess/sendfaqsuccess.component';
import { ContactsentsuccessComponent } from './faq/contactsentsuccess/contactsentsuccess.component';

import {MatDividerModule} from '@angular/material/divider';
import { GatePicComponent } from './gate-pic/gate-pic.component';
import { MoreDetailsComponent } from './more-details/more-details.component';



@NgModule ({
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
        SlideshowModule,
        SliderModule,
        CanvasWhiteboardModule,
        MatDividerModule,
        ReactiveFormsModule, 
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        //MatDialog, 
        //MatDialogRef,
        HttpClientModule,
        MatDividerModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSliderModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatProgressBarModule,
        MatMenuModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule


    ],
    entryComponents: [
      GateExampleComponent,
      FAQComponent,
      MyFavouritesComponent,
      DialogComponent,
      Pro1dialogComponent,
      Shareproduct1Component,
      Pro2dialogComponent,
      Pro3dialogComponent,
      ContactComponent,

      AddeddialogComponent,
      SendfaqsuccessComponent
    ],
   // declarations: [AuthComponent, AboutUsComponent, ModernGardenComponent, ShoppingCartComponent, GateExampleComponent , FAQComponent,

   //   GatePicComponent,
   // MoreDetailsComponent,
  //  ],
    declarations: [AuthComponent, AboutUsComponent, ModernGardenComponent, ShoppingCartComponent, GateExampleComponent ,FAQComponent,GatePicComponent, MoreDetailsComponent,

      MyFavouritesComponent,
      DialogComponent,
      Pro1dialogComponent,
      Shareproduct1Component,
      Pro2dialogComponent,
      Pro3dialogComponent,
      ContactComponent,
      AddeddialogComponent,
      SendfaqsuccessComponent,
      ContactsentsuccessComponent,
      GatePicComponent,
      MoreDetailsComponent,
      ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class AuthModule { }
