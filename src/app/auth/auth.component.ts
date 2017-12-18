import { Component, OnInit ,Input} from '@angular/core';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations'
import { fadeAnimation } from '../material-widgets/animation';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],

  //   trigger('fadeInAnimation', [
  //     transition('* <=> *', [
  //       // Initial state of new route
  //       query(':enter',
  //         style({
  //           position: 'fixed',
  //           width:'100%',
  //           transform: 'translateX(-100%)'
  //         }),
  //         {optional:true}),
  //       // move page off screen right on leave
  //       query(':leave',
  //         animate('500ms ease',
  //           style({
  //             position: 'fixed',
  //             width:'100%',
  //             transform: 'translateX(100%)'
  //           })
  //         ),
  //       {optional:true}),
  //       // move page in screen from left to right
  //       query(':enter',
  //         animate('500ms ease',
  //           style({
  //             opacity: 1,
  //             transform: 'translateX(0%)'
  //           })
  //         ),
  //       {optional:true}),
  //     ])
  //   ])
  // ]
   // trigger('fadeInAnimation', [
   //    transition('* <=> *', [
   //      // Initial state of new route
   //      query(':enter',
   //       animate('2s', style({ opacity: 1 })
   //           ),
   //        ),
   //      // move page off screen right on leave
   //      query(':leave',
   //        animate('2s', style({ opacity: 1 })
   //        ),
   //     ),
   //      // move page in screen from left to right
   //      query(':enter',
   //        animate('2s', style({ opacity: 1 })
   //        ),
   //      ),
   //    ])
   //  ])]})

  animations:[ trigger('fadeInAnimation', [
        // route 'enter' transition
        transition('* <=> *', [

            // styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('2s', style({ opacity: 1 })),

        ]),])]
})

export class AuthComponent implements OnInit{
    @Input() isVisible : boolean = true;
  visibility = 'shown';

  ngOnChanges() {
   this.visibility = this.isVisible ? 'shown' : 'hidden';
  }
	sideNavOpened: boolean = true;
	matDrawerOpened: boolean = false;
	matDrawerShow: boolean = true;
	sideNavMode: string = 'side';

	constructor(private media: ObservableMedia) { }

	ngOnInit() {
		this.media.subscribe((mediaChange: MediaChange) => {
            this.toggleView();
        });
	}
    getRouteAnimation(outlet) {

       return outlet.activatedRouteData.animation
       //return outlet.isActivated ? outlet.activatedRoute : ''
    }
    
	toggleView() {
		if (this.media.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true;
            this.matDrawerOpened = false;
            this.matDrawerShow = true;
        } else if(this.media.isActive('gt-xs')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false;
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
        } else if (this.media.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
	}

    
}
