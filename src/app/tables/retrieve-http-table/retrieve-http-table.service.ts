import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {MatPaginator, MatSort} from '@angular/material';
import { GithubApi,GithubIssue } from '../interfaces';
@Injectable()
export class RetrieveHttpTableService {
retrieveTablehtmlsource: string = `<div class="example-container mat-elevation-z8">
  <div class="example-loading-shade"
       *ngIf="dataSource.isLoadingResults || dataSource.isRateLimitReached">
    <mat-spinner *ngIf="dataSource.isLoadingResults"></mat-spinner>
    <div class="example-rate-limit-reached" *ngIf="dataSource.isRateLimitReached">
      GitHub's API rate limit has been reached. It will be reset in one minute.
    </div>
  </div>

  <mat-table #table [dataSource]="dataSource" class="example-table"
            matSort matSortActive="created_at" matSortDisableClear matSortDirection="asc">

    <!--- Note that these columns can be defined in any order.
          The actual rendered columns are set as a property on the row definition" -->

    <!-- Number Column -->
    <ng-container matColumnDef="number">
      <mat-header-cell *matHeaderCellDef>#</mat-header-cell>
      <mat-cell *matCellDef="let row">{{ row.number }}</mat-cell>
    </ng-container>

    <!-- Title Column -->
    <ng-container matColumnDef="title">
      <mat-header-cell *matHeaderCellDef>Title</mat-header-cell>
      <mat-cell *matCellDef="let row">{{ row.title }}</mat-cell>
    </ng-container>

    <!-- State Column -->
    <ng-container matColumnDef="state">
      <mat-header-cell *matHeaderCellDef>State</mat-header-cell>
      <mat-cell *matCellDef="let row">{{ row.state }}</mat-cell>
    </ng-container>

    <!-- Created Column -->
    <ng-container matColumnDef="created_at">
      <mat-header-cell *matHeaderCellDef
                      mat-sort-header
                      disableClear="true">
        Created
      </mat-header-cell>
      <mat-cell *matCellDef="let row">{{ row.created_at | date }}</mat-cell>
    </ng-container>

    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>

  <mat-paginator [length]="dataSource.resultsLength"
                [pageSize]="30">
  </mat-paginator>
</div>
`.trim();
  retrieveTabletssource:string = `import {Component, OnInit, ViewChild} from '@angular/core';
import {Http} from '@angular/http';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'table-http-example',
  styleUrls: ['table-http-example.css'],
  templateUrl: 'table-http-example.html',
})
export class TableHttpExample implements OnInit {
  displayedColumns = ['created_at', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDao | null;
  dataSource: ExampleDataSource | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: Http) {}

  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDao(this.http);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase!, this.paginator, this.sort);
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: Http) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      '${'href'}?q=repo:angular/material2&sort=${'sort'}&order=${'order'}&page=${'page' + 1}';

    return this.http.get(requestUrl)
                    .map(response => response.json() as GithubApi);
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleHttpDao. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<GithubIssue> {
  // The number of issues returned by github matching the query.
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;

  constructor(private exampleDatabase: ExampleHttpDao,
              private paginator: MatPaginator,
              private sort: MatSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<GithubIssue[]> {
    const displayDataChanges = [
      this.sort.sortChange,
      this.paginator.page
    ];

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    return Observable.merge(...displayDataChanges)
      .startWith(null)
      .switchMap(() => {
        this.isLoadingResults = true;
        return this.exampleDatabase.getRepoIssues(
          this.sort.active, this.sort.direction, this.paginator.pageIndex);
      })
      .map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.total_count;

        return data.items;
      })
      .catch(() => {
        this.isLoadingResults = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isRateLimitReached = true;
        return Observable.of([]);
      });
  }

  disconnect() {}
}
` 
    retrieveTablecsssource:string = `/* Structure */
.example-container {
  display: flex;
  flex-direction: column;
  max-height: 500px;
  min-width: 300px;
  position: relative;
}

.example-header {
  min-height: 64px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  font-size: 20px;
}

.example-table {
  overflow: auto;
  min-height: 300px;
}

.mat-column-title {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  overflow: hidden;
}

/* Column Widths */
.mat-column-number,
.mat-column-state {
  max-width: 64px;
}

.mat-column-created {
  max-width: 124px;
}

.example-loading-shade {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 56px;
  right: 0;
  background: rgba(0, 0, 0, 0.15);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.example-rate-limit-reached {
  color: #980000;
  max-width: 360px;
  text-align: center;
}
`
  constructor() { }

}



/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: Http) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

    return this.http.get(requestUrl)
                    .map(response => response.json() as GithubApi);
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleHttpDao. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<GithubIssue> {
  // The number of issues returned by github matching the query.
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;

  constructor(private exampleDatabase: ExampleHttpDao,
              private paginator: MatPaginator,
              private sort: MatSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<GithubIssue[]> {
    const displayDataChanges = [
      this.sort.sortChange,
      this.paginator.page
    ];

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    return Observable.merge(...displayDataChanges)
      .startWith(null)
      .switchMap(() => {
        this.isLoadingResults = true;
        return this.exampleDatabase.getRepoIssues(
          this.sort.active, this.sort.direction, this.paginator.pageIndex);
      })
      .map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.total_count;

        return data.items;
      })
      .catch(() => {
        this.isLoadingResults = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isRateLimitReached = true;
        return Observable.of([]);
      });
  }

  disconnect() {}
}

