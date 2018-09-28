import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MatDialog} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {AddeddialogComponent} from '../addeddialog/addeddialog.component';

@Component({
  selector: 'app-pro2dialog',
  templateUrl: './pro2dialog.component.html',
  styleUrls: ['./pro2dialog.component.scss']
})
export class Pro2dialogComponent implements OnInit {
  dialogResult = '';


  constructor(public  thisDialogRef: MatDialogRef <Pro2dialogComponent>, @Inject( MAT_DIALOG_DATA)public data: string, public dialog: MatDialog) {}

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');

  }
  openDialog() {
    const dialogRef = this.dialog.open(AddeddialogComponent, {
      width: '600px',
      data: 'This text is passed'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed:${result}`);
      this.dialogResult = result;
    })

  }


}
