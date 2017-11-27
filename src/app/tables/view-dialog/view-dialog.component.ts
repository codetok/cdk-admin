import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewDialogComponent implements OnInit {
public displayedColumns = ['userId', 'userName', 'progress', 'color'];
public dataForm;
  constructor(public dialog: MatDialog,public mat:MatDialogRef<ViewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, public form: FormBuilder,
) { 
  	this.dataForm = this.form.group({
  				id: [data.id],
                name: [data.name],
                progress: [data.progress],
                color: [data.color]
        });}

  ngOnInit() {
  }
  SaveChanges() {
  	this.mat.close(this.dataForm.value);
  }

}
