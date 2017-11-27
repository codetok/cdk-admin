import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cdk-dashcard',
  templateUrl: './dashcard.component.html',
  styleUrls: ['./dashcard.component.scss']
})
export class DashcardComponent implements OnInit {

  constructor() { }
  @Input() colorDark: string;
  @Input() colorLight: string;
  @Input() title: string;
  @Input() icon: string;
  @Input() number: number;
  @Input() progress:number;

  ngOnInit() {
  }


}
