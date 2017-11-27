import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { SortingTableService, ExampleDatabase,ExampleDataSource} from './sorting-table.service';

@Component({
  selector: 'cdk-sorting-table',
  templateUrl: './sorting-table.component.html',
  styleUrls: ['./sorting-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SortingTableComponent implements OnInit {
    public showSortingTableCode;
    displayedColumns = ['userId', 'userName', 'progress', 'color'];
    exampleDatabase = new ExampleDatabase();
    dataSource: ExampleDataSource | null;
    constructor(public sortingServ: SortingTableService) {}
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.sort);
  }
}
