import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cdk-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
		public showIconMenuCode;
    public showBasicMenuCode;
    public showNestedMenuCode
    basicMenuhtmlsource: string = `<button mat-button [matMenuTriggerFor]="menu">Menu</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>Item 1</button>
  <button mat-menu-item>Item 2</button>
</mat-menu>


`.trim();
  basicMenutssource:string = `import {Component} from '@angular/core';

/**
 * @title Basic menu
 */
@Component({
  selector: 'menu-overview-example',
  templateUrl: 'menu-overview-example.html',
  styleUrls: ['menu-overview-example.css'],
})
export class MenuOverviewExample {}



    ` 
    basicMenucsssource:string = `/** No CSS for this example */

`
    nestedMenuhtmlsource: string = `<button mat-button [matMenuTriggerFor]="animals">Animal index</button>

<mat-menu #animals="matMenu">
  <button mat-menu-item [matMenuTriggerFor]="vertebrates">Vertebrates</button>
  <button mat-menu-item [matMenuTriggerFor]="invertebrates">Invertebrates</button>
</mat-menu>

<mat-menu #vertebrates="matMenu">
  <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
  <button mat-menu-item [matMenuTriggerFor]="amphibians">Amphibians</button>
  <button mat-menu-item [matMenuTriggerFor]="reptiles">Reptiles</button>
  <button mat-menu-item>Birds</button>
  <button mat-menu-item>Mammals</button>
</mat-menu>

<mat-menu #invertebrates="matMenu">
  <button mat-menu-item>Insects</button>
  <button mat-menu-item>Molluscs</button>
  <button mat-menu-item>Crustaceans</button>
  <button mat-menu-item>Corals</button>
  <button mat-menu-item>Arachnids</button>
  <button mat-menu-item>Velvet worms</button>
  <button mat-menu-item>Horseshoe crabs</button>
</mat-menu>

<mat-menu #fish="matMenu">
  <button mat-menu-item>Baikal oilfish</button>
  <button mat-menu-item>Bala shark</button>
  <button mat-menu-item>Ballan wrasse</button>
  <button mat-menu-item>Bamboo shark</button>
  <button mat-menu-item>Banded killifish</button>
</mat-menu>

<mat-menu #amphibians="matMenu">
  <button mat-menu-item>Sonoran desert toad</button>
  <button mat-menu-item>Western toad</button>
  <button mat-menu-item>Arroyo toad</button>
  <button mat-menu-item>Yosemite toad</button>
</mat-menu>

<mat-menu #reptiles="matMenu">
  <button mat-menu-item>Banded Day Gecko</button>
  <button mat-menu-item>Banded Gila Monster</button>
  <button mat-menu-item>Black Tree Monitor</button>
  <button mat-menu-item>Blue Spiny Lizard</button>
  <button mat-menu-item disabled>Velociraptor</button>
</mat-menu>

`.trim();
  nestedMenutssource:string = `import {Component} from '@angular/core';

/**
 * @title Nested menu
 */
@Component({
  selector: 'nested-menu-example',
  templateUrl: 'nested-menu-example.html',
  styleUrls: ['nested-menu-example.css']
})
export class NestedMenuExample {}

    ` 
    nestedMenucsssource:string = `/** No CSS for this example */


`
    iconMenuhtmlsource: string = `<button mat-icon-button [matMenuTriggerFor]="menu">
  <mat-icon>more_vert</mat-icon>
</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>
    <mat-icon>dialpad</mat-icon>
    <span>Redial</span>
  </button>
  <button mat-menu-item disabled>
    <mat-icon>voicemail</mat-icon>
    <span>Check voicemail</span>
  </button>
  <button mat-menu-item>
    <mat-icon>notifications_off</mat-icon>
    <span>Disable alerts</span>
  </button>
</mat-menu>


`.trim();
  iconMenutssource:string = `import {Component} from '@angular/core';

/**
 * @title Menu with icons
 */
@Component({
  selector: 'menu-icons-example',
  templateUrl: 'menu-icons-example.html',
  styleUrls: ['menu-icons-example.css'],
})
export class MenuIconsExample {}
    ` 
    iconMenucsssource:string = `/** No CSS for this example */
`
  public showSimpleListCode;
  constructor() { }

  ngOnInit() {
  }

}
