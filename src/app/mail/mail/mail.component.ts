import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { ComposeComponent } from '../compose/compose.component';

@Component({
  selector: 'cdk-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  allMails;
  shownMails = [];
  shownMailDetail;

  constructor(public composeDialog: MatDialog,
              private snackBar: MatSnackBar,
              @Inject('mailService') private service) {
    this.getMails();
  }

  ngOnInit() {
    
  }

  getMails() {
    this.service.getMails().subscribe((res)=> {
      console.log(res);
      this.shownMails = res;
      console.log(this.shownMails);
    });
    console.log(this.shownMails);
    console.log(this.shownMailDetail);
    // console.log(this.service._mails);
    // this.shownMails = this.service._mails;
    // console.log(this.shownMails);
  }


  openMailDetial(mail) {
    this.shownMailDetail = mail;
  }

  onForward(status) {
    this.shownMailDetail = null;
  }

  openComposeDialog() {
    const dialogRef = this.composeDialog.open(ComposeComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

      this.snackBar.open('Message has been sent', '', {duration: 3000});
    });
  }

}
