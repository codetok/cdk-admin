import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	checked = false;
    indeterminate = false;
  constructor() { }

  ngOnInit() {
  }
  employees = [
				{select: 'Hari', position: 'Full stack developer',image:'assets/profile.jpg'},
				{select: 'Sujith', position: 'Full stack developer',image:'assets/man.jpeg'},
				{select: 'Ramya', position: 'Full stack developer',image:'assets/noavatar.png'},
				{select: 'Sree', position: 'Full stack developer',image:'assets/profile.jpg'},
				{select: 'Sruthy', position: 'Full stack developer',image:'assets/noavatar.png'},
				{select: 'Fahad', position: 'Full stack developer',image:'assets/profile.jpg'},
			];
}
