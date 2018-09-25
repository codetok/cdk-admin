import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MatDialog} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-shareproduct1',
  templateUrl: './shareproduct1.component.html',
  styleUrls: ['./shareproduct1.component.scss']
})
export class Shareproduct1Component implements OnInit {

  constructor(public  thisDialogRef: MatDialogRef <Shareproduct1Component>, @Inject( MAT_DIALOG_DATA)public data: string) {}

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');

  }


}
