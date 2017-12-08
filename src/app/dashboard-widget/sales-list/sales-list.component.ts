import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  public showLoader:boolean = false;
  public sales = [
      {
        companyIcon:'https://www.bugsplat.com/images/icons/angular_icon_blue.png',
        companyName:'Codetok',
        star:'20',
        fork: false,
        watch: false,
      },
      {
        companyIcon:'https://firebase.google.com/_static/4d0ad1dc9e/images/firebase/logo.png',
        companyName:'Firebase',
        star:'2k',
        fork: false,
        watch: false,
      },
      {
        companyIcon:'https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_256,w_256,f_jpg/v1481031537/j9c8urpwe7uabwmt2qau.png',
        companyName:'Ionic',
        star:false,
        fork: false,
        watch: 22,
      },
      {
        companyIcon:'https://www.gstatic.com/images/branding/product/2x/app_maker_64dp.png',
        companyName:'google dev',
        star:false,
        watch: false,
        fork: '22',
      }
  ]
  constructor() { }

  ngOnInit() {
  }

  reload() {
      this.showLoader = true;
      setTimeout(() => {
          this.showLoader = false;
      },2000)
  }

}
