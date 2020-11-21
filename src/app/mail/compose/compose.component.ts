import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cdk-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  mail;
  name;
  address = 'hari@codetok.com';
  subject;
  content;

  constructor(private dialogRef: MatDialogRef<ComposeComponent>) {
  }

  ngOnInit() {
  }

  send() {
    this.mail = {
      from: {
        name: this.name,
        mail: this.address
      },
      subject: this.subject,
      content: this.content
    };

    console.log(this.mail, this.name, this.subject);
    this.dialogRef.close(this.mail);
  }
}
