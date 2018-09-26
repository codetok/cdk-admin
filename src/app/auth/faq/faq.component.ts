import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {GateExampleComponent} from '../gate-example/gate-example.component';

import {DialogComponent} from './dialog/dialog.component';
import {AddeddialogComponent} from './addeddialog/addeddialog.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

export class FAQComponent implements OnInit {
  dialogResult = '';
  private show1: boolean;
  private show2: boolean;
  private show3: boolean;
  private show4: boolean;
  private show5: boolean;
  private show6: boolean;
  private show7: boolean;
  private show8: boolean;
  constructor( public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
      data: 'This text is passed'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed:${result}`);
      this.dialogResult = result;
    })
  }







  ngOnInit() {
  }

  showDetails1(): void
  {
    this.show1 = true;

  }
  showDetails2(): void
  {
    this. show2 = true;

  }
  showDetails3(): void
  {
    this. show3 = true;

  }
  showDetails4(): void
  {
    this. show4 = true;

  }
  showDetails5(): void
  {
    this. show5 = true;

  }
  showDetails6(): void
  {
    this. show6 = true;

  }
  showDetails7(): void
  {
    this. show7 = true;

  }
  showDetails8(): void
  {
    this. show8 = true;

  }

  hide1(): void
  {
    this.show1= false;
  }
  hide2(): void
  {
    this.show2= false;
  }
  hide3(): void
  {
    this.show3= false;
  }
  hide4(): void
  {
    this.show4= false;
  }
  hide5(): void
  {
    this.show5= false;
  }
  hide6(): void
  {
    this.show6= false;
  }
  hide7(): void
  {
    this.show7= false;
  }
  hide8(): void
  {
    this.show8= false;
  }







}




