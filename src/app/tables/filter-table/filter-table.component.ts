import { Component, OnInit, ViewEncapsulation,ElementRef, ViewChild } from '@angular/core';

import { FilterTableService, ExampleDatabase, ExampleDataSource } from './filter-table.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cdk-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterTableComponent implements OnInit {
	public displayedColumns = ['userId', 'userName', 'progress', 'color'];
	public exampleDatabase = new ExampleDatabase();
	public dataSource: ExampleDataSource | null;
  public showFilterTableCode;
	constructor(public filterServ: FilterTableService ) {}
    @ViewChild('filter') filter: ElementRef;

    ngOnInit() {
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
              if (!this.dataSource) { return; }
              this.dataSource.filter = this.filter.nativeElement.value;
            });
    }
}

/** Constants used to fill up our data base. */

