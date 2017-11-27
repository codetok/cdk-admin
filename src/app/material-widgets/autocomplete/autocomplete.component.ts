import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'highlight.js/styles/github.css';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
@Component({
  selector: 'cdk-app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AutocompleteComponent implements OnInit {
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

 tssource: string = `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'autocomplete-overview-example',
  templateUrl: 'autocomplete-overview-example.html',
  styleUrls: ['autocomplete-overview-example.css']
})
export class AutocompleteOverviewExample {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: any[] = [
   {
	  name: 'Arkansas',
	  population: '2.978M',
	  // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
	  flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
	},
	{
	  name: 'California',
	  population: '39.14M',
	  // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
	  flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
	},
	{
	  name: 'Florida',
	  population: '20.27M',
	  // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
	  flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
	},
	{
      name: 'Texas',
	  population: '27.47M',
	  // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
	  flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
	}
  ];
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
}`.trim();
   htmlsource:string = `
<form class="example-form">
  <mat-form-field class="example-full-width">
	<input matInput placeholder="State" aria-label="State" [matAutocomplete]="auto" [formControl]="stateCtrl">
	  <mat-autocomplete #auto="matAutocomplete">
	    <mat-option *ngFor="let state of filteredStates | async" [value]="state.name">
		  <img style="vertical-align:middle;" aria-hidden src="{{state.flag}}" height="25" />
		  <span>{{ state.name }}</span> |
		  <small>Population: {{state.population}}</small>
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
    ` 
  
   
  public showSource:boolean = false;  
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

}
