import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { input_HELPERS, Messages, Links } from './helpers.data';

export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
	selector: 'cdk-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
	InputHelpers: any = input_HELPERS;
	links = Links;
	selectedValue;
	showMultiListCode: boolean = false;
	messages = Messages;
	value = 'Clear me';
	emailFormControl = new FormControl('', [
		Validators.required,
		Validators.email,
	]);
	emailFormControls = new FormControl('', [
		Validators.required,
		Validators.pattern(EMAIL_REGEX)]);
	matcher = new MyErrorStateMatcher();
	constructor() { }

	ngOnInit() {
	}

}
