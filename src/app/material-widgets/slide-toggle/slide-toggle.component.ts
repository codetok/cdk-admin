  import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cdk-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideToggleComponent implements OnInit {
	color = 'accent';
	checked = false;
  showBasicSlidetoggleCode;
showConfigureSliderCode;
	disabled = false;
    basicSlidetogglehtmlsource: string = `<mat-slide-toggle>Slide me!</mat-slide-toggle>

`.trim();
  basicSlidetoggletssource:string = `import {Component} from '@angular/core';

/**
 * @title Basic slide-toggles
 */
@Component({
  selector: 'slide-toggle-overview-example',
  templateUrl: 'slide-toggle-overview-example.html',
})
export class SlideToggleOverviewExample {}


    ` 
    basicSlidetogglecsssource:string = `/** No CSS for this example */

`
 configureSlidetogglehtmlsource: string = `<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Slider configuration</h2>

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
      <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
    </section>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>

<mat-card class="result">
  <mat-card-content>
    <h2 class="example-h2">Result</h2>

    <section class="example-section">
      <mat-slide-toggle
          class="example-margin"
          [color]="color"
          [checked]="checked"
          [disabled]="disabled">
        Slide me!
      </mat-slide-toggle>
    </section>
  </mat-card-content>
</mat-card>

`.trim();
  configureSlidetoggletssource:string = `import {Component} from '@angular/core';

/**
 * @title Configurable slide-toggle
 */
@Component({
  selector: 'slide-toggle-configurable-example',
  templateUrl: 'slide-toggle-configurable-example.html',
  styleUrls: ['slide-toggle-configurable-example.css'],
})
export class SlideToggleConfigurableExample {
  color = 'accent';
  checked = false;
  disabled = false;
}


    ` 
    configureSlidetogglecssource:string = `.example-h2 {
  margin: 10px;
}

.example-section {
  display: flex;
  align-content: center;
  align-items: center;
  height: 60px;
}

.example-margin {
  margin: 10px;
}

`
  showBasicSelectCode:any;
  constructor() { }
  
  public SlideToggleComponent:any;

  ngOnInit() {
  }

}
