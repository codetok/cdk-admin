import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  openMenu:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
