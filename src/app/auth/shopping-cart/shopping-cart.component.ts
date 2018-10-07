import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  singleItemValue = 40;
  totalValue = 40;

  checkOutItemsArray = [
    {
      'id': 'item1',
      'image': 'https://agdsystems.co.uk/UserFiles/Image/Timber%20swing%20gates/Gallery/Underground%20timber%20swing%20half%20open%20-%20large.jpg',
      'title': 'Preasure Treated Wooden Lap Side Garden Gate',
      'about': 'For extra strength and durability, this square lap gate is fully framed to provide a solid, reliable garden gate.',
      'unitprice': 40,
      'quantity': 1,
    },
    {
      'id': 'item2',
      'image': 'https://www.agdsystems.co.uk/UserFiles/Image/Timber%20swing%20gates/Gallery/Solid%20Oak%20Chacombe%20Style%20-%20Large.jpg',
      'title': 'Forest Europa 3\' x 6\' Pressure Treated Wooden Side Garden Gate',
      'about': 'Lovingly designed to perfectly complement the Vertical Hit and Miss Panels, this premium wooden gate would make an equally handsome stand-alone side gate in your garden.',
      'unitprice': 50,
      'quantity': 1,
    },
    {
      'id': 'item3',
      'image': 'https://s3-media2.fl.yelpcdn.com/bphoto/2xDL6b51QTeu0jweZimo1A/o.jpg',
      'title': 'Forest Europa 3\' x 6\' Pressure Treated Wooden Side Garden Gate',
      'about': 'Lovingly designed to perfectly complement the Vertical Hit and Miss Panels, this premium wooden gate would make an equally handsome stand-alone side gate in your garden.',
      'unitprice': 50,
      'quantity': 1
    }
  ];




  constructor() { }

  ngOnInit() {
  }

  onChangeValue(itemId) {
    const inputValue = (<HTMLInputElement>document.getElementById('inputValue' + itemId)).value;
    this.totalValue = parseInt(inputValue) * this.singleItemValue;
    (<HTMLInputElement>document.getElementById('totalValue' + itemId)).value = this.totalValue;
    console.log(inputValue);
  }

}
