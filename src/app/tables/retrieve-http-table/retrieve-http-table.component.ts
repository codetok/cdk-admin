import { Component, OnInit, ViewEncapsulation,ViewChild} from '@angular/core';
import {Http} from '@angular/http';
import {MatPaginator, MatSort} from '@angular/material';
import { RetrieveHttpTableService, ExampleDataSource, ExampleHttpDao } from './retrieve-http-table.service';
@Component({
  selector: 'cdk-retrieve-http-table',
  templateUrl: './retrieve-http-table.component.html',
  styleUrls: ['./retrieve-http-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RetrieveHttpTableComponent implements OnInit {
 displayedColumns = ['created_at', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDao | null;
  dataSource: ExampleDataSource | null;
    public showRetrieveTableCode;
    public  showNavListCode;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: Http, public retrieveHttpServ: RetrieveHttpTableService) {}

    ngOnInit() {
        this.exampleDatabase = new ExampleHttpDao(this.http);
        this.dataSource = new ExampleDataSource(
        this.exampleDatabase!, this.paginator, this.sort);
    }
}
