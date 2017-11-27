import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'cdk-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent {
	autoTicks = false;
	disabled = false;
	invert = false;
	max = 100;
	min = 0;
	showTicks = false;
	step = 1;
	thumbLabel = false;
	value = 0;
	vertical = false;
  showBasicSliderCode;
showConfigureSliderCode;
	tssource: string = `
  
`.trim();
  basicSliderhtmlsource:string = `<mat-slider></mat-slider>
    ` 
    basicSlidertssource:string = `import {Component} from '@angular/core';

/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-overview-example',
  templateUrl: 'slider-overview-example.html',
  styleUrls: ['slider-overview-example.css'],
})
export class SliderOverviewExample {}

`
    basicSlidercsssource:string = `
mat-slider {
  width: 300px;
}

`
configureSliderhtmlsource:string = `<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Slider configuration</h2>

    <section class="example-section">
      <mat-form-field class="example-margin">
        <input matInput type="number" placeholder="Value" [(ngModel)]="value">
      </mat-form-field>
      <mat-form-field class="example-margin">
        <input matInput type="number" placeholder="Min value" [(ngModel)]="min">
      </mat-form-field>
      <mat-form-field class="example-margin">
        <input matInput type="number" placeholder="Max value" [(ngModel)]="max">
      </mat-form-field>
      <mat-form-field class="example-margin">
        <input matInput type="number" placeholder="Step size" [(ngModel)]="step">
      </mat-form-field>
    </section>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="showTicks">Show ticks</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="autoTicks" *ngIf="showTicks">
        Auto ticks
      </mat-checkbox>
      <mat-form-field class="example-margin" *ngIf="showTicks && !autoTicks">
        <input matInput type="number" placeholder="Tick interval" [(ngModel)]="tickInterval">
      </mat-form-field>
    </section>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="thumbLabel">Show thumb label</mat-checkbox>
    </section>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="vertical">Vertical</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="invert">Inverted</mat-checkbox>
    </section>

    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
    </section>

  </mat-card-content>
</mat-card>

<mat-card class="result">
  <mat-card-content>
    <h2 class="example-h2">Result</h2>

    <mat-slider
        class="example-margin"
        [disabled]="disabled"
        [invert]="invert"
        [max]="max"
        [min]="min"
        [step]="step"
        [thumb-label]="thumbLabel"
        [tick-interval]="tickInterval"
        [value]="value"
        [vertical]="vertical">
    </mat-slider>
  </mat-card-content>
</mat-card>

    ` 
    configureSlidertssource:string = `import {Component, ViewEncapsulation} from '@angular/core';

/**
 * @title Configurable slider
 */
@Component({
  selector: 'slider-configurable-example',
  templateUrl: 'slider-configurable-example.html',
  styleUrls: ['slider-configurable-example.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class SliderConfigurableExample {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;
}

`
    configureSlidercsssource:string = `.example-h2 {
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

.mat-slider-horizontal {
  width: 300px;
}

.mat-slider-vertical {
  height: 300px;
}

`
	constructor() { }

	ngOnInit() {
	}
	get tickInterval(): number | 'auto' {
		return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
	}
	set tickInterval(v) {
		this._tickInterval = Number(v);
	}
	private _tickInterval = 1;
}
