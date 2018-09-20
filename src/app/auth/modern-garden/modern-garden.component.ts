import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {GateExampleComponent} from '../gate-example/gate-example.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-modern-garden',
  templateUrl: './modern-garden.component.html',
  styleUrls: ['./modern-garden.component.scss']
})
export class ModernGardenComponent implements OnInit {

 // gateExample : GateExampleComponent;
 message = 'you do not have permission to access this link. Log in first!';
 action = 'exit';
 show:boolean=false;
 logedin:boolean=true;
  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }

  showDetails(): void 
  {
    this.show=true;
   /* this.dialog.open(GateExampleComponent,{
      width: '500px',
      height:'500px'
    })*/
  }
  hide():void
  {
    this.show=false;
  }
  buy():void
  {
    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });
  }
  checkLogedIn()
  {
    return this.logedin;
  }
  openDialog()
  {
    this.dialog.open(GateExampleComponent,{
      width:'500px',
      height:'500px',
    });
  }
};

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor() {}
}

