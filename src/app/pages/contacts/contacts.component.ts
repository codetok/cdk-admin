import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
	checked = false;
    indeterminate = false;
  constructor() { }

  ngOnInit() {
  }
  employees = [
				{select: 'Hari', position: 'Full stack developer'},
				{select: 'Hari', position: 'Full stack developer'},
				{select: 'Hari', position: 'Full stack developer'},
			];
}
