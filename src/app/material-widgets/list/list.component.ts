import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'highlight.js/styles/github.css';

@Component({
  selector: 'cdk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
	links = ['/home', '/admin'];

	/*simple list*/
	simpleListtssource: string = `
	  	import {Component} from '@angular/core';
		@Component({
		  selector: 'list-overview-example',
		  templateUrl: 'list-overview-example.html',
		})
		export class ListOverviewExample {}`.trim();

	simpleListhtmlsource:string = `
	<h3>Simple List</h3>
	<mat-list>
		<mat-list-item> Pepper </mat-list-item>
		<mat-list-item> Salt </mat-list-item>
		<mat-list-item> Paprika </mat-list-item>
	</mat-list>`;

	showSimpleListCode: boolean = false;

	// navigation list

	navListtssource: string = `
	  	import {Component} from '@angular/core';
		@Component({
		  selector: 'list-overview-example',
		  templateUrl: 'list-overview-example.html',
		})
		export class ListOverviewExample {
			links = ['/home', '/admin'];
		}`.trim();

	navListhtmlsource:string = `
	<h3>Navigation List</h3>
	<mat-nav-list>
		<mat-list-item *ngFor="let link of links">
			<a matLine href="...">{{ link }}</a>
				<button mat-icon-button>
					<mat-icon>info</mat-icon>
				</button>
		</mat-list-item>
	</mat-nav-list>`;

	showNavListCode: boolean = false;

	// selection lists
	selListtssource: string = `
	  	import {Component} from '@angular/core';
		@Component({
		  selector: 'list-overview-example',
		  templateUrl: 'list-overview-example.html',
		})
		export class ListOverviewExample {}`.trim();

	selListhtmlsource:string = `
	<h3>Selection List</h3>
	<mat-selection-list #shoes>
		<mat-list-option *ngFor="let shoe of ['Boots', 'Sneaker', 'Casual']">
			{{shoe}}
		</mat-list-option>
	</mat-selection-list>

	<p>
		Options selected: {{shoes.selectedOptions.selected.length}}
	</p>`;

	showSelListCode: boolean = false;

	// multi line lists
	multiListtssource: string = `
	  	import {Component} from '@angular/core';
		@Component({
		  selector: 'list-overview-example',
		  templateUrl: 'list-overview-example.html',
		})
		export class ListOverviewExample {
			messages = [
				{from: 'codetok', subject: 'client', content: 'hi there'},
				{from: 'client', subject: 'codetok', content: 'yes'},
				{from: 'jay', subject: 'tom', content: 'yes please'},
			];
		}`.trim();

	multiListhtmlsource:string = `
	<h3>Multi line List</h3>
	<mat-list>
		<h3>Two line</h3>
			<mat-list-item *ngFor="let message of messages">
				<h3 matLine> {{message.from}} </h3>
				<p matLine>
					<span> {{message.subject}} </span>
					<span class="demo-2"> -- {{message.content}} </span>
				</p>
			</mat-list-item>
	</mat-list>

	<!-- three line list -->
	<mat-list>
		<h3>Three line</h3>
			<mat-list-item *ngFor="let message of messages">
				<h3 matLine> {{message.from}} </h3>
				<p matLine> {{message.subject}} </p>
				<p matLine class="demo-2"> {{message.content}} </p>
			</mat-list-item>
	</mat-list>`;

	showMultiListCode: boolean = false;
	messages = [
		{from: 'codetok', subject: 'client', content: 'hi there'},
		{from: 'client', subject: 'codetok', content: 'yes'},
		{from: 'jay', subject: 'tom', content: 'yes please'},
	];

	// icon lists
	iconListtssource: string = `
	  	import {Component} from '@angular/core';
		@Component({
		  selector: 'list-overview-example',
		  templateUrl: 'list-overview-example.html',
		})
		export class ListOverviewExample {
			messages = [
				{from: 'codetok', subject: 'client', content: 'hi there'},
				{from: 'client', subject: 'codetok', content: 'yes'},
				{from: 'jay', subject: 'tom', content: 'yes please'},
			];
		}`.trim();

	iconListhtmlsource:string = `
	<h3>List with icons</h3>
	<mat-list>
		<mat-list-item *ngFor="let message of messages">
			<mat-icon matListIcon>folder</mat-icon>
			<h3 matLine> {{message.from}} </h3>
			<p matLine>
				<span> {{message.subject}} </span>
				<span class="demo-2"> -- {{message.content}} </span>
			</p>
		</mat-list-item>
	</mat-list>`;

	showIconListCode: boolean = false;

	// avatar lists
	avatarListtssource: string = `
	  	import {Component} from '@angular/core';
		@Component({
		  selector: 'list-overview-example',
		  templateUrl: 'list-overview-example.html',
		})
		export class ListOverviewExample {
			messages = [
				{from: 'codetok', subject: 'client', content: 'hi there'},
				{from: 'client', subject: 'codetok', content: 'yes'},
				{from: 'jay', subject: 'tom', content: 'yes please'},
			];
		}`.trim();

	avatarListhtmlsource:string = `
	<h3>List with avatar</h3>
	<mat-list>
		<mat-list-item *ngFor="let message of messages">
			<img matListAvatar src="https://assets.entrepreneur.com/content/3x2/1300/20150820205507-single-man-outdoors-happy-bliss.jpeg" alt="...">
			<h3 matLine> {{message.from}} </h3>
			<p matLine>
				<span> {{message.subject}} </span>
				<span class="demo-2"> -- {{message.content}} </span>
			</p>
		</mat-list-item>
	</mat-list>`;

	showAvatarListCode: boolean = false;

	// dense lists
	denseListtssource: string = `
	  	import {Component} from '@angular/core';
		@Component({
		  selector: 'list-overview-example',
		  templateUrl: 'list-overview-example.html',
		})
		export class ListOverviewExample {}`.trim();

	denseListhtmlsource:string = `
	<h3>Dense list</h3>
	<mat-list dense>
		<mat-list-item> Pepper </mat-list-item>
		<mat-list-item> Salt </mat-list-item>
		<mat-list-item> Paprika </mat-list-item>
	</mat-list>`;

	showDenseListCode: boolean = false;

	//  Lists with multiple sections
	multipleSectionListtssource: string = `
	  	import {Component} from '@angular/core';
		@Component({
		  selector: 'list-overview-example',
		  templateUrl: 'list-overview-example.html',
		})

		export class ListOverviewExample {
			 folders = [
			    {
			      name: 'Photos',
			      updated: new Date('1/1/16'),
			    },
			    {
			      name: 'Recipes',
			      updated: new Date('1/17/16'),
			    },
			    {
			      name: 'Work',
			      updated: new Date('1/28/16'),
			    }
			  ];
			  notes = [
			    {
			      name: 'Vacation Itinerary',
			      updated: new Date('2/20/16'),
			    },
			    {
			      name: 'Kitchen Remodel',
			      updated: new Date('1/18/16'),
			    }
			  ];
		}`.trim();

	multipleSectionListhtmlsource:string = `
	<h3> Lists with multiple sections</h3>
	<mat-list>
   		<h3 matSubheader>Folders</h3>
   		<mat-list-item *ngFor="let folder of folders">
      		<mat-icon matListIcon>folder</mat-icon>
      		<h4 matLine>{{folder.name}}</h4>
      		<p matLine class="demo-2"> {{folder.updated}} </p>
   		</mat-list-item>
   		<mat-divider></mat-divider>
   		<h3 matSubheader>Notes</h3>
   		<mat-list-item *ngFor="let note of notes">
      		<mat-icon matListIcon>note</mat-icon>
      		<h4 matLine>{{note.name}}</h4>
      		<p matLine class="demo-2"> {{note.updated}} </p>
   		</mat-list-item>
	</mat-list>`;

	showmultipleSectionListCode: boolean = false;
	folders = [
	    {
	      name: 'Photos',
	      updated: new Date('1/1/16'),
	    },
	    {
	      name: 'Recipes',
	      updated: new Date('1/17/16'),
	    },
	    {
	      name: 'Work',
	      updated: new Date('1/28/16'),
	    }
  	];
  	notes = [
	    {
	      name: 'Vacation Itinerary',
	      updated: new Date('2/20/16'),
	    },
	    {
	      name: 'Kitchen Remodel',
	      updated: new Date('1/18/16'),
	    }
  	];

  	constructor() { }

  	ngOnInit() {
  	}

}
