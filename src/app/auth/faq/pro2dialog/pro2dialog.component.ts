import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MatDialog} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pro2dialog',
  templateUrl: './pro2dialog.component.html',
  styleUrls: ['./pro2dialog.component.scss']
})
export class Pro2dialogComponent implements OnInit {

  constructor(public  thisDialogRef: MatDialogRef <Pro2dialogComponent>, @Inject( MAT_DIALOG_DATA)public data: string) {}

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');

  }

}
