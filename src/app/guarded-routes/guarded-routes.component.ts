
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-guarded-routes',
  templateUrl: './guarded-routes.component.html',
  styleUrls: ['./guarded-routes.component.scss']
})
export class GuardedRoutesComponent implements OnInit {
  message = 'you do not have permission to access this link';
  action = 'exit';
  constructor(public router: Router, public snackBar: MatSnackBar) {

  }

  ngOnInit() {

  }
  Onclick() {

    this.router.navigate(['/auth/guarded-routes/example']);
    // this.router.navigate(['/auth/guarded-routes/', { outlets: { popup: [ 'example' ] }}]); 
  }
  Onclicked() {

    this.router.navigate(['/auth/guarded-routes/ex']);

    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });

  }
  get route() {
    return this.router.routerState.snapshot.url.toString();
  }

}
