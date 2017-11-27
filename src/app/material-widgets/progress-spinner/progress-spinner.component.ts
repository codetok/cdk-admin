import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressSpinnerComponent implements OnInit {
showProgressBarCode;
showSource;
	color = 'primary';
  	mode = 'determinate';
  	value = 50;
    htmlsource: string = `
<h2 class="example-h2">Progress spinner configuration</h2>

<section class="example-section">
    <label class="example-margin">Color:</label>
    <mat-radio-group [(ngModel)]="color">
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
    <mat-radio-group [(ngModel)]="mode">
        <mat-radio-button class="example-margin" value="determinate">
            Determinate
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="indeterminate">
            Indeterminate
        </mat-radio-button>
    </mat-radio-group>
</section>

<section class="example-section" *ngIf="mode == 'determinate'">
    <label class="example-margin">Progress:</label>
    <mat-slider class="example-margin" [(ngModel)]="value"></mat-slider>
</section>

         
<mat-card>
    <mat-card-content>
        <h2 class="example-h2">Result</h2>

        <mat-progress-spinner
           class="example-margin"
           [color]="color"
           [mode]="mode"
           [value]="value">
       </mat-progress-spinner>
    </mat-card-content>
</mat-card>
    `;
    tssource: string = `
        import {Component} from '@angular/core';
        @Component({
          selector: 'expansion-overview-example',
          templateUrl: 'expansion-overview-example.html',
        })
        export class ExpansionOverviewExample {
          panelOpenState: boolean = false;
        }
    `;
  	constructor() { }

  	ngOnInit() {
  	}

}
