import { Component, OnInit , Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MatDialog} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { MatSnackBar } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AddeddialogComponent} from '../addeddialog/addeddialog.component';
import {SendfaqsuccessComponent} from '../sendfaqsuccess/sendfaqsuccess.component';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



export interface Animal {
  name: string;

}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})



export class DialogComponent implements OnInit {
  dialogResult = '';

  animalControl = new FormControl('', [Validators.required]);
  animals: Animal[] = [
    {name: 'General'},
    {name: 'Shipping'},
    {name: 'Orders'},
    {name: 'Returns',},
    {name: 'Other',},
  ];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();


  constructor(public  thisDialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');

  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');


  }

  openDialog() {
    const dialogRef = this.dialog.open(SendfaqsuccessComponent, {
      width: '600px',
      data: 'This text is passed'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed:${result}`);
      this.dialogResult = result;
    })
  }
}
}
