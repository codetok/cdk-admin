import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { STEPPER_HELPERS } from './helpers.data';

@Component({
  selector: 'cdk-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
	isLinear = false;
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;
	stepperHelpers = STEPPER_HELPERS;
  	constructor(private formBuilder: FormBuilder) { }

  	ngOnInit() {
  		this.firstFormGroup = this.formBuilder.group({
	      firstCtrl: ['', Validators.required]
	    });
	    this.secondFormGroup = this.formBuilder.group({
	      secondCtrl: ['', Validators.required]
	    });
  	}

}
