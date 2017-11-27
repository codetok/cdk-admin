import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	FormValidationsComponent,
  	ReactiveFormsComponent,
	TemplateDrivenFormsComponent 
  ]
})
export class FormsModule { }
