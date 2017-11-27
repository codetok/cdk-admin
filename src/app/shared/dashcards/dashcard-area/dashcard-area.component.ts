import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-dashcard-area',
  templateUrl: './dashcard-area.component.html',
  styleUrls: ['./dashcard-area.component.scss']
})
export class DashcardAreaComponent implements OnInit {

  visitCount:number = 5678;
  constructor() { }

  ngOnInit() {
  }

}
