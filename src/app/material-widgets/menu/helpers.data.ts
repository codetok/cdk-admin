export const MENU_HELPERS: any = {
	tsSourceMenu: `
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
      imports: [
        MatMenuModule,
    })
export class AppModule { }

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'cdk-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
	`.trim(),
	htmlSourceMenu: `
<div>
    <button mat-button [matMenuTriggerFor]="menu">Menu</button>
    <mat-menu #menu="matMenu">
        <button mat-menu-item>Item 1</button>
        <button mat-menu-item>Item 2</button>
    </mat-menu>
</div>
	`.trim(),
}