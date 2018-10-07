import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  addressShow:boolean=true;
  add:String;
  visa:boolean=false;
  master:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  addressCheck(e)
  {
    if(e.checked)
    {
      this.addressShow=false;
      //console.log("true");
    }
    else
    {
      this.add="";
      this.addressShow=true;
    }
  }
  onSubmit(f:NgForm)
  {
    console.log(f.value.category);
    if(f.value.category=="master")
    {
      this.master=true;
    }
    else if (f.value.category=="visa")
    {
      this.visa=true;
    }
  }

}
