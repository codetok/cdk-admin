import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router'; 

const appRoutes: Routes = [
    { path: '', component: RegisterComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
