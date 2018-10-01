import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public imagesUrl;


  constructor( ) {}






  ngOnInit() {
    this.imagesUrl = [

      '../../../assets/images/about/gate-manufacturer-supplier-uk.jpg',
      '../../../assets/images/about/gates-in-production-and-ready-for-delivery (1).jpg',
      '../../../assets/images/about/wood-factory-for-gates.jpg',


    ];
  }





}
