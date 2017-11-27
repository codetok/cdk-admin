import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-dashcard-horizontal',
  templateUrl: './dashcard-horizontal.component.html',
  styleUrls: ['./dashcard-horizontal.component.scss']
})
export class DashcardHorizontalComponent implements OnInit {

  visitCount:number = 3456;
  
  constructor() { }

  ngOnInit() {
  }

}
