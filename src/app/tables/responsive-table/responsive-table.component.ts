import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { ResponsiveTableService} from './responsive-table.service';
import {MatPaginator} from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ViewDialogComponent} from '../view-dialog/view-dialog.component';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResponsiveTableComponent implements OnInit {
	displayedColumns = ['userId', 'userName', 'progress', 'color'];
	public rows: Array<any> = [];
    public showResponsiveTableCode;

	@ViewChild(MatPaginator) paginator1: MatPaginator;
    public pageLength = 0;
    public pageSize = 15;
    @Input() status;
    @Input() actionStatus;
    @Output() edit = new EventEmitter();
    @Output() delete = new EventEmitter();
    @Output() view = new EventEmitter();
    @Output() page = new EventEmitter();
    @Output() sort = new EventEmitter();
    @Output() dup = new EventEmitter();
  constructor(public responsiveServ: ResponsiveTableService,public dialog: MatDialog) {
   }

    ngOnInit() {
        this.getRows();
    }
  	next(event) {
        this.rows = [];
    	for (var i= 1 * event.pageIndex * event.pageSize; i< event.pageSize+event.pageIndex*event.pageSize ;i++) {
            this.rows = [...this.rows,this.responsiveServ.rows[i]];
        }
    }
    getRows() {
        for (var i=0;i<this.pageSize;i++) {
            this.rows = [...this.rows,this.responsiveServ.rows[i]];
        }
        this.pageLength = this.responsiveServ.rows.length;
    }
    
    editRow(row) {
        row.edit = true;
        let dialogRef = this.dialog.open(ViewDialogComponent,{ data: row});
        dialogRef.afterClosed().subscribe(result => {
            for (let row in this.rows) {
                if (this.rows[row].id == result.id) {
                    this.rows[row] =result;
                }
            }
        })
    }
    viewRow(row){
        let dialogRef = this.dialog.open(ViewDialogComponent,{ data: row});
        
    }
    deleteRow(index) {
        this.rows.splice(index, 1);
    }
    sortData(val){
    }

    findDuplicates(application) {
    }
}
