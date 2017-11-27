import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-dashcard-pie',
  templateUrl: './dashcard-pie.component.html',
  styleUrls: ['./dashcard-pie.component.scss']
})
export class DashcardPieComponent implements OnInit {

  visitCount:number = 2345;
  constructor() { }

  ngOnInit() {
  }

}
