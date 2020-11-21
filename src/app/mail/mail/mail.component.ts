import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MediaChange, MediaObserver } from "@angular/flex-layout";

import { ComposeComponent } from '../compose/compose.component';

@Component({
  selector: 'cdk-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
    check = false;
    allMails;
    shownMails = [];
    shownMailDetail;

    height: string = '500px';
    constructor(public composeDialog: MatDialog,
              private snackBar: MatSnackBar,
              @Inject('mailService') private service,
              private media: MediaObserver) {
        this.getMails();
    }

    ngOnInit() {
        this.updateHieght();
        this.media.asObservable().subscribe(() => {
            this.updateHieght();
        });
    }

    updateHieght() {
        let body = document.body, html = document.documentElement;
        let h = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight ) - 66;
        this.height = h + 'px';
    }

    getMails() {
        this.service.getMails().subscribe((res)=> {
            this.shownMails = res;
            this.setMailStatus(false);
        });
    }
    setMailStatus(value) {
        for (let mail of this.shownMails) {
                mail.checked = value;
            }
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
            this.snackBar.open('Message has been sent', '', {duration: 3000});
        });
    }
    onStatusChange(value) {
        this.check = value;
        this.setMailStatus(value);
    }
    onUncheckmail(event) {
        this.check = false;
    }

}
