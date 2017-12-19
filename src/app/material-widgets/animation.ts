import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =
//trigger('fadeAnimation', [
        // route 'enter' transition
        // transition('* => *', [

        //     // styles at start of transition
        //     style({ opacity: 0 }),

        //     // animation and styles at end of transition
        //     animate('2s', style({ opacity: 1 })),

        // ]),])
    trigger('fadeAnimation', [

        transition( '* => *', [

            query(':enter', 
                [
                    style({ opacity: 0 })
                ], 
                { optional: true }
            ),

            // query(':leave', 
            //     [
            //         style({ opacity: 1 }),
            //         animate('2s', style({ opacity: 0 }))
            //     ], 
            //     { optional: true }
            // ),

            query(':enter', 
                [
                    style({ opacity: 0 }),
                    animate('2s', style({ opacity: 1 }))
                ], 
                { optional: true }
            )

        ])

    ])