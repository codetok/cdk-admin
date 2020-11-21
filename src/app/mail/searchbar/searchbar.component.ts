
import {fromEvent as observableFromEvent} from 'rxjs';

import {distinctUntilChanged, debounceTime, map} from 'rxjs/operators';
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'cdk-mail-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  inputValue;

  @Input() placeholder: string = '查找...';
  @Input() delay: number = 200;
  @Output() onSearch = new EventEmitter();
  @Output() onSearchChange = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    const event$ = observableFromEvent(elementRef.nativeElement, 'keyup').pipe(
      map(() => this.inputValue),
      debounceTime(this.delay),
      distinctUntilChanged(),);
    event$.subscribe(input => this.onSearchChange.emit(input));
  }

  enterUp() {
    this.onSearch.emit(this.inputValue);
  }

}
