import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-mail-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() mail;
  @Input() itemCount;
  @Output() onForward = new EventEmitter();
  @Output() onCheck = new EventEmitter();
  constructor() { }
  @Input() checked;
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  onForwardTriggered() {
    // this.shownMailDetail = null;
    this.onForward.emit(true);
  }
  showOptions(event) {
    this.onCheck.emit(event.checked);
  }

}
