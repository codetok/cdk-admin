import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router'; 

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
