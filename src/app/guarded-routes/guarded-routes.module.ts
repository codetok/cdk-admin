import { NgModule ,Injectable} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardedRoutesComponent } from './guarded-routes.component';
import { GuardedRouter } from './guarded-routes.router';
import { RouterComponent } from './router/router.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import { RouterDeactivateComponent } from './router-deactivate/router-deactivate.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSnackBarModule,
    GuardedRouter,
    MatToolbarModule
   ],
   providers: [
   
  ],
  declarations: [GuardedRoutesComponent, RouterComponent, RouterDeactivateComponent]
})
export class GuardedRoutesModule { }
