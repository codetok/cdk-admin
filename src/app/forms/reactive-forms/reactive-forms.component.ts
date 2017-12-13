import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
public profileForm:FormGroup;
submitted = false;

  constructor(public form: FormBuilder) { 
  		this.profileForm = this.form.group({
            displayName:['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
            email:['',Validators.required],
            number:['',Validators.required],
            pwd:['',Validators.required]
         });
  }
 onSubmit() { 
 	console.log('');
 	this.submitted = true; }
  ngOnInit() {
  }

}
