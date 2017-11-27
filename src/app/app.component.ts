import { Component,OnInit, AfterViewInit,ViewChild  } from '@angular/core';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

declare const document;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    sidenavWidth = 4;
    open: boolean = false;
    mode: string = 'side';
    opened: boolean = true;
    searchOpen: boolean = false;
    @ViewChild('container') private _container;
    public showMenu: boolean = true;
    constructor(private media: ObservableMedia) {
        this.media.subscribe((mediaChange: MediaChange) => {
            this.mode = this.getMode(mediaChange);
            this.opened = this.mode == 'side' ? true : false;  
        });
    }
    private getMode(mediaChange: MediaChange): string {
    // set mode based on a breakpoint
        if (this.media.isActive('gt-sm')) {
          return 'side';
        } else {
          return 'over';
        }
    }

    ngOnInit() {
    }
    ngAfterViewInit() {

    }
    toggle() {
        //ugly fix for now, material should come up with better ways to fix this
        setTimeout(() => {
                
        });
        this._container._ngZone.onMicrotaskEmpty.subscribe(() => {
            this._container._updateContentMargins();
            this._container.
            this._container._changeDetectorRef.markForCheck();
        })
        
    }

}
