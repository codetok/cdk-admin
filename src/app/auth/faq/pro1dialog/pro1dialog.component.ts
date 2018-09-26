import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MatDialog} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pro1dialog',
  templateUrl: './pro1dialog.component.html',
  styleUrls: ['./pro1dialog.component.scss']
})
export class Pro1dialogComponent implements OnInit {

  constructor(public  thisDialogRef: MatDialogRef <Pro1dialogComponent>, @Inject( MAT_DIALOG_DATA)public data: string) {}

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');

  }

}
