import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-addeddialog',
  templateUrl: './addeddialog.component.html',
  styleUrls: ['./addeddialog.component.scss']
})
export class AddeddialogComponent implements OnInit {

  constructor(public  thisDialogRef: MatDialogRef <AddeddialogComponent>, @Inject( MAT_DIALOG_DATA)public data: string) { }

  ngOnInit() {
  }


}
