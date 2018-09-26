import { Component, OnInit } from '@angular/core';
import {MatCard, MatDialog} from '@angular/material';
import {Pro1dialogComponent} from '../auth/faq/pro1dialog/pro1dialog.component';
import {Pro2dialogComponent} from '../auth/faq/pro2dialog/pro2dialog.component';

import {Pro3dialogComponent} from '../auth/faq/pro3dialog/pro3dialog.component';

import {Shareproduct1Component} from '../auth/faq/shareproduct1/shareproduct1.component';
import {CHECKBOX_HELPERS} from '../material-widgets/checkbox/helpers.data';

@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './dashboard-crm.component.html',
    styleUrls: ['./dashboard-crm.component.scss']
})

export class DashboardCrmComponent implements OnInit {


  dialogResult = '';
  public imagesUrl;

  public icon1 = 'favorite_border';

  public icon2 = 'favorite_border';
  public icon3 = 'favorite_border';

  public changeIcon1(newIcon: string ){
    this.icon1 = newIcon ;
  }

  public changeIcon2(newIcon: string ){
    this.icon2 = newIcon ;
  }
  public changeIcon3(newIcon: string ){
    this.icon3 = newIcon ;
  }

  constructor( public dialog: MatDialog) {}
  openProduct1() {
    const dialogRef = this.dialog.open(Pro1dialogComponent, {
      width: '600px',
      data: 'This text is passed'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed:${result}`);
      this.dialogResult = result;
    })
  }
  openProduct2() {
    const dialogRef = this.dialog.open(Pro2dialogComponent, {
      width: '600px',
      data: 'This text is passed'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed:${result}`);
      this.dialogResult = result;
    })
  }
  openProduct3() {
    const dialogRef = this.dialog.open(Pro3dialogComponent, {
      width: '600px',
      data: 'This text is passed'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed:${result}`);
      this.dialogResult = result;
    })
  }

  shareProduct1(){
    const dialogRef = this.dialog.open(Shareproduct1Component, {
      width: '600px',
      data: 'This text is passed'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed:${result}`);
      this.dialogResult = result;
    })
  }







    ngOnInit() {
      this.imagesUrl = [
        '../../assets/images/slideshows/gate-sale-by-gates-and-fences-uk.png',

      ];
    }

}
