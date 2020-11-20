import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-round-progressbar',
  templateUrl: './round-progressbar.component.html',
  styleUrls: ['./round-progressbar.component.scss']
})
export class RoundProgressbarComponent implements OnInit {

    
    @Input() current;
    @Input() max;
    @Input() background;
    @Input() color;
    @Input() boxcolor;
    @Input() title;



    public radius       =    250;
    public stroke       =    "20" ;
    public semicircle   =    false;
    public rounded      =    true;
    public clockwise    =    false;
    public responsive   =    true;
    public duration     =    "800";
    public animation    =    'easeInOutQuart';

    constructor() { }

    ngOnInit() {
    }
    getOverlayStyle() {
        let isSemi = this.semicircle;
        // let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
        // This way Angular won't break trying to sanitize
        let transform = (isSemi ? 'translateX(-50%)' : 'translate(-50%,-50%)');

        return {
          'top': isSemi ? 'auto' : '50%',
          'bottom': isSemi ? '5%' : 'auto',
          'left': '50%',
          'transform': transform,
          '-moz-transform': transform,
          '-webkit-transform': transform,
          'font-size': this.radius / 7 + 'px'
        };
    }

}
