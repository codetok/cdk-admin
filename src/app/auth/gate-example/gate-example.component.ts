import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-gate-example',
  templateUrl: './gate-example.component.html',
  styleUrls: ['./gate-example.component.scss']
})
export class GateExampleComponent implements OnInit {
  productCustomize:boolean=false;
  clickedOnce:boolean=false;
  message = 'Added to the cart!';
  action = 'OK';
  constructor(
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }
  customize(e)
  {
    if(e.checked)
    {
      //console.log("want");
      this.productCustomize=true;
    }
    else 
    {
      //console.log("dont")
      this.productCustomize=false;
    }
  }
  addToCart()
  {
    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });
    this.clickedOnce=true;
  }

}
