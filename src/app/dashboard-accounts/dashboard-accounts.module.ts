import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAccountsComponent } from './dashboard-accounts.component';
import { RouterModule, Routes } from '@angular/router'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

export const appRoutes: Routes = [
    { path: '', component: DashboardAccountsComponent },
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [DashboardAccountsComponent]
})
export class DashboardAccountsModule { }
