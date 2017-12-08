import { Component, OnInit } from '@angular/core';
import { CARDS_HELPERS } from './helpers.data';

@Component({
  selector: 'cdk-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
cardsHelpers: any = CARDS_HELPERS;
}
