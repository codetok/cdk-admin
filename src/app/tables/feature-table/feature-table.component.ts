import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { TABLE_HELPERS, ExampleDatabase, ExampleDataSource } from './helpers.data';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cdk-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss']
})
export class FeatureTableComponent implements OnInit {

	showNavListCode;
	displayedColumns = ['select', 'userId', 'userName', 'progress', 'color'];
	exampleDatabase = new ExampleDatabase();
	selection = new SelectionModel<string>(true, []);
	dataSource: ExampleDataSource | null;
	allfeatures = TABLE_HELPERS;
	constructor() { }
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild('filter') filter: ElementRef;

	ngOnInit() {
	    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
	    Observable.fromEvent(this.filter.nativeElement, 'keyup')
	        .debounceTime(150)
	        .distinctUntilChanged()
	        .subscribe(() => {
	          if (!this.dataSource) { return; }
	          this.dataSource.filter = this.filter.nativeElement.value;
	        });
	}

	isAllSelected(): boolean {
	    if (!this.dataSource) { return false; }
	    if (this.selection.isEmpty()) { return false; }

	    if (this.filter.nativeElement.value) {
	      return this.selection.selected.length == this.dataSource.renderedData.length;
	    } else {
	      return this.selection.selected.length == this.exampleDatabase.data.length;
	    }
	}

	masterToggle() {
	    if (!this.dataSource) { return; }

	    if (this.isAllSelected()) {
	      this.selection.clear();
	    } else if (this.filter.nativeElement.value) {
	      this.dataSource.renderedData.forEach(data => this.selection.select(data.id));
	    } else {
	      this.exampleDatabase.data.forEach(data => this.selection.select(data.id));
	    }
	}

}
