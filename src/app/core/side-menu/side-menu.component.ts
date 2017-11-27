import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menujson } from './menu-json';

@Component({
    selector: 'cdk-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent{

    public menus = menujson; 
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
    }
    menuChange(row) {
    	for (let menu of this.menus) {
    		for (let submenu of menu.sub) {
    			if (submenu.name == row.name) {
    				submenu.open = true;
    			} else {
    				submenu.open = false;
    			}
    		}
    	}
    }

}
