import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import { 
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatListModule,
       } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {path: '', component: ServicesComponent},
  ];
@NgModule({
    imports: [
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatListModule,
        RouterModule.forChild(routes)
    ],
    declarations: [   
       // ServicesComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class ServicesModule {
}
