import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cdk-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepperComponent implements OnInit {

  	isLinear = false;
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;

	tssource: string = `
	  import { Component } from '@angular/core';
	  @Component({
	    template: 'Hello {{ name }}'
	  })
	  class HelloWorldComponent {
	  name: string = 'World!';
	  }`.trim();
	  htmlsource:string = `
<button mat-raised-button (click)="isLinear = true" id="toggle-linear">Enable linear mode</button>
<mat-horizontal-stepper [linear]="isLinear">
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step [stepControl]="secondFormGroup">
    <form [formGroup]="secondFormGroup">
      <ng-template matStepLabel>Fill out your address</ng-template>
      <mat-form-field>
        <input matInput placeholder="Address" formControlName="secondCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    You are now done.
    <div>
      <button mat-button matStepperPrevious>Back</button>
    </div>
  </mat-step>
</mat-horizontal-stepper>
	    `.trim();
	showSource:boolean = false; 

	constructor(private _formBuilder: FormBuilder) { }

	ngOnInit() {
	    this.firstFormGroup = this._formBuilder.group({
	      firstCtrl: ['', Validators.required]
	    });
	    this.secondFormGroup = this._formBuilder.group({
	      secondCtrl: ['', Validators.required]
	    });
	}

}
