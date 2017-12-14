import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
const FormsRoutes: Routes = [
  	{ path: 'reactive_forms', component: ReactiveFormsComponent },
  	{ path: 'template_forms', component: TemplateDrivenFormsComponent },
  	
];

@NgModule({
  imports: [
    RouterModule.forChild(FormsRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class FormsRouterModule {}