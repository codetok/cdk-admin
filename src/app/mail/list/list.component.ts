import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()  mails;
  @Output() onOpenMailDetial = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log(this.mails);
  }
  onOpenMailDetialTriggered(mail) {
    this.onOpenMailDetial.emit(mail);
  }

}
