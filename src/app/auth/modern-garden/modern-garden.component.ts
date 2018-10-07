import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {GateExampleComponent} from '../gate-example/gate-example.component';
import { MatSnackBar } from '@angular/material';
import {GatePicComponent} from '../gate-pic/gate-pic.component';
import {MoreDetailsComponent} from '../more-details/more-details.component';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import swal from 'sweetalert';


export interface Rate {
  name: string;
}

@Component({
  selector: 'app-modern-garden',
  templateUrl: './modern-garden.component.html',
  styleUrls: ['./modern-garden.component.scss']
})
export class ModernGardenComponent implements OnInit {

  rates:Rate[]=[
    {name:"Impressed"},
    {name:"Satisfied"},
    {name:"OK"}
  ]
  public imagesUrl;
  swal:any;
 // gateExample : GateExampleComponent;
 message = 'you do not have permission to access this link. Log in first!';
 message1='Added To the Shoping Cart!'
 action = 'exit';
 show:boolean=false;
 logedin:boolean=true;
 clickedOnce:boolean=false;
 comment:string="";
  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.imagesUrl = [
      '../../../assets/gate3.jpg',
      '../../../assets/Unknown.jpg',
      '../../../assets/gate2.jpg',
      '../../../assets/231605.jpg',
      '../../../assets/images.jpeg',
      '../../../assets/images (1).jpeg',
    ];
  }

  showDetails(): void 
  {
    this.show=true;
    this.dialog.open(MoreDetailsComponent,{
      width: '500px',
      height:'350px'
    })
    
   /* this.dialog.open(GateExampleComponent,{
      width: '500px',
      height:'500px'
    })*/
  }
  hide():void
  {
    this.show=false;
    swal({
      //position: 'top-end',
      icon: "success",
      title: 'Thank You for the Feedback!',
      closeOnClickOutside: false,
    })
    this.comment=null;
  }
  addToCart(e){
    if(this.logedin)
    {
      this.snackBar.open(this.message1, this.action, {
        duration: 2000,
      });
      this.clickedOnce=true;
    }
    
    else{
      this.snackBar.open(this.message, this.action, {
        duration: 2000,
      });
      
    }
    
  }
  buy():void
  {

    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });

    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });
    this.clickedOnce=true;
  
  }
  checkLogedIn()
  {
    return this.logedin;
  }
  openDialog()
  {
    this.dialog.open(GateExampleComponent,{
      width:'600px',
      height:'600px',
    });
  }

  gatePic()
  {
    this.dialog.open(GatePicComponent,{
      width:'600px',
      height:'600px',
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

