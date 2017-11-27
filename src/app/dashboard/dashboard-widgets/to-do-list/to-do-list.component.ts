import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  typesOfShoes = ['Boots', 'Clogs', 'Loafers','Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor() { }

  ngOnInit() {
  }

}
