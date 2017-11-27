import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import 'hammerjs';

@Component({
    selector: 'cdk-slider-card',
    templateUrl: './slider-card.component.html',
    styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {

    @ViewChild('ele') el:ElementRef;
    public width:number;
    public height:number;

    public carouselOne: NgxCarousel;
    imagelist = [
        'obi.png',
        'boba.png',
        'leia.png',
    ];
     
    ngDoCheck() {
        if(this.el.nativeElement.offsetWidth != this.width) {
          this.width = this.el.nativeElement.offsetWidth;
          this.ngOnInit();
        }
    }

    ngOnInit() {
        this.carouselOne = {
          grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
          slide: 1,
          speed: 400,
          interval: 4000,
          point: {
            visible: true,
            pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 10px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
          },
          load: 1,
          touch: false,
          loop: true,
          custom: 'banner'
        }
    }   
    myfunc() {

    } 

}
