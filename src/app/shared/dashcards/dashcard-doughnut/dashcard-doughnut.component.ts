import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-dashcard-doughnut',
  templateUrl: './dashcard-doughnut.component.html',
  styleUrls: ['./dashcard-doughnut.component.scss']
})
export class DashcardDoughnutComponent implements OnInit {

  visitCount:number = 2347;
  constructor() { }

  ngOnInit() {}

}
