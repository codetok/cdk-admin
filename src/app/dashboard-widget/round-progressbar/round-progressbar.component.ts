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



    public radius       =    "250";
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
     

}
