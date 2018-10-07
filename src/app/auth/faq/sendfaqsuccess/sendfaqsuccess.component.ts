import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-sendfaqsuccess',
  templateUrl: './sendfaqsuccess.component.html',
  styleUrls: ['./sendfaqsuccess.component.scss']
})
export class SendfaqsuccessComponent implements OnInit {

  constructor(public  thisDialogRef: MatDialogRef <SendfaqsuccessComponent>, @Inject( MAT_DIALOG_DATA)public data: string) { }


  ngOnInit() {
  }

}
