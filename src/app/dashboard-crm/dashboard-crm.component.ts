import { Component, OnInit } from '@angular/core';
import {MatCard, MatDialog} from '@angular/material';
import {Pro1dialogComponent} from '../auth/faq/pro1dialog/pro1dialog.component';
import {Pro2dialogComponent} from '../auth/faq/pro2dialog/pro2dialog.component';

import {Pro3dialogComponent} from '../auth/faq/pro3dialog/pro3dialog.component';

import {Shareproduct1Component} from '../auth/faq/shareproduct1/shareproduct1.component';
import {CHECKBOX_HELPERS} from '../material-widgets/checkbox/helpers.data';
import {GateExampleComponent} from '../auth/gate-example/gate-example.component';
import { MatSnackBar } from '@angular/material';


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

        '../../assets/images/slideshows/4-tall-vinyl-scalloped-baluster-fence-and-gate31.jpg',
        '../../assets/images/slideshows/garden-arbor-with-fence-wood-gate-pergola-like-the-entrance-home-fences-diy-deluxe.jpg',
        '../../assets/images/slideshows/decorative-metal-garden-gates-decorative-garden-gates-metal-gate-and-entry-wood-fence-for-sale-decorative-garden-gates-decorative-metal-garden-gates-for-sale.jpg',
        '../../assets/images/slideshows/iron-work-fence-decorative-custom-ironwork-wrought-iron-fence-design-for-sale-for-garden-decor-ironwork-fences-gates.jpg',
        '../../assets/images/slideshows/side-yard-gates-custom-iron-fences-gates-n-ave-phoenix-phone-number-yelp-side-yard-gates-phoenix.jpg',

      ];
    }


};



