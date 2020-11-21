export const SPINNER_HELPERS: any = {

	tsSourceProgressSpinner: `
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
    @NgModule({
      imports: [
       MatProgressSpinnerModule]
    })
    export class AppModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})

export class SpinnerComponent implements OnInit {
	showProgressBarCode;
	showSource;
		color = 'primary';
	  	mode = 'determinate';
	  	value = 50;

}
`.trim(),

	htmlSourceProgressSpinner: `
<div fxLayout="column" fxLayoutGap=15px>
    <section class="example-section">
          <label class="example-margin">Color:</label>
          <mat-radio-group [(ngModel)]="color" fxLayout="column"  fxLayoutGap=10px>
            <mat-radio-button class="example-margin" value="primary">
              Primary
            </mat-radio-button>
            <mat-radio-button class="example-margin" value="accent">
              Accent
            </mat-radio-button>
               <mat-radio-button class="example-margin" value="warn">
              Warn
            </mat-radio-button>
        </mat-radio-group>
    </section>

    <section class="example-section">
        <label class="example-margin">Mode:</label>
        <mat-radio-group [(ngModel)]="mode" fxLayout="column"  fxLayoutGap=10px>
            <mat-radio-button class="example-margin" value="determinate">
              Determinate
            </mat-radio-button>
            <mat-radio-button class="example-margin" value="indeterminate">
              Indeterminate
            </mat-radio-button>
        </mat-radio-group>
    </section>

    <section class="example-section " *ngIf="mode == 'determinate'">
        <label class="mat-subheading-2 center-align">Progress:</label>
        <mat-slider class="example-margin" [(ngModel)]="value"></mat-slider>
    </section>
</div>

<div fxFlex.xs="100" fxFlex.lg="50" fxFlex.md="50" fxFlex.sm="50" >
    <h4 class="mat-subheading-2 center-align">Result</h4>
    <mat-divider></mat-divider>
        
    <mat-progress-spinner
        class="example-margin"
        [color]="color"
        [mode]="mode"
        [value]="value">
    </mat-progress-spinner>
</div>

`.trim(),
};