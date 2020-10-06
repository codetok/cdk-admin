import { Component, OnInit } from '@angular/core';
import {SendfaqsuccessComponent} from '../sendfaqsuccess/sendfaqsuccess.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-contactsentsuccess',
  templateUrl: './contactsentsuccess.component.html',
  styleUrls: ['./contactsentsuccess.component.scss']
})
export class ContactsentsuccessComponent implements OnInit {
  dialogResult = '';

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }


}
