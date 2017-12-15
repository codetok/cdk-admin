export const AUTOCOMPLETE_HELPERS: any = {

	tsSourceAutocomplete: `
import { MatAutocompleteModule } from '@angular/material';
  
    @NgModule({
      imports: [
       MatAutocompleteModule
    })
    export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
@Component({
  selector: 'cdk-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  constructor() { 
  this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(state => state ? this.filterStates(state) : this.states.slice());
    }
    filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
}

  ngOnInit() {
  }
	stateCtrl: FormControl;
  	filteredStates: Observable<any[]>;
  	states: any[] = [
    {
      name: 'Arkansas',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

}
`.trim(),
	htmlSourceAutocomplete: `
<form class="example-form">
	<mat-form-field class="example-full-width">
		<input matInput placeholder="State" aria-label="State" [matAutocomplete]="auto" [formControl]="stateCtrl">
		<mat-autocomplete #auto="matAutocomplete">
			<mat-option *ngFor="let state of filteredStates | async" [value]="state.name">
			<img style="vertical-align:middle;" aria-hidden src="{{state.flag}}" height="25" />
			<span>{{ state.name }}</span> 
			</mat-option>
		</mat-autocomplete>
	</mat-form-field>
	<br />
	<mat-slide-toggle
		[checked]="stateCtrl.disabled"
		(change)="stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()">
		Disable Input?
	</mat-slide-toggle>
</form>
`.trim(),

};