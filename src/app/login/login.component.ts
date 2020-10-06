import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login()
  {
    window.location.href = "http://localhost:4200/auth/dashboard";
  }
}
