import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material';

import { PaginationTableService,ExampleDatabase,ExampleDataSource } from './pagination-table.service';
@Component({
  selector: 'cdk-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationTableComponent implements OnInit {
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
  public showPaginationTableCode;
  constructor(public paginationServ: PaginationTableService ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    console.log(this.dataSource);
  }
}
