import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */

@Component({
  selector: 'cdk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent  {
  public showBasicInputCode;
  public showClearableInputCode;
  public showTextareaInputCode;
  public showDisabledInputCode;
  public showFixedlengthInputCode;
  public showPrefixInputCode;

  public showEmailInputCode;

  basicInputhtmlsource : string = ` <mat-form-field class="example-full-width">
                          <input matInput placeholder="Company Name" value="Codetok">
                        </mat-form-field>

  `.trim();
  basicInputtssource : string =`import {Component} from '@angular/core';
  @Component({
  selector: 'cdk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputOverviewExample {}
`.trim();
  basicInputcsssource : string = `.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
.mat-card-header-text {  margin: 0!important;}
`.trim();
  emailInputhtmlsource : string =`<form class="example-form">
<mat-form-field class="example-full-width">
<input matInput placeholder="Email" [formControl]="emailFormControl"
[errorStateMatcher]="matcher">
<mat-hint>Errors appear instantly!</mat-hint>
<mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
Please enter a valid email address
</mat-error>
<mat-error *ngIf="emailFormControl.hasError('required')">
Email is <strong>required</strong>
</mat-error>
</mat-form-field>
</form>
`.trim();
  emailInputtssource : string =`import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'cdk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}
`.trim();
  emailInputcsssource : string =`
  .example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
.mat-card-header-text {  margin: 0!important;}
`.trim();
  clearableInputhtmlsource : string =`<mat-form-field class="example-form-field">
<input matInput type="text" placeholder="Clearable input" [(ngModel)]="value" />
<button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''">
<mat-icon>close</mat-icon>
</button>
</mat-form-field>
`.trim();
  clearableInputtssource : string =`import {Component} from '@angular/core';
  @Component({
  selector: 'cdk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputClearableExample {
  value = 'Clear me';
}
`.trim();
  clearableInputcsssource : string =`.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
.mat-card-header-text {  margin: 0!important;}
`.trim();
  textareaInputhtmlsource : string =`<mat-form-field>
    <textarea matInput placeholder="Autosize textarea" matTextareaAutosize matAutosizeMinRows="2"
            matAutosizeMaxRows="5"></textarea>
</mat-form-field>`.trim();
  textareaInputtssource : string =`import {Component} from '@angular/core';
  @Component({
  selector: 'cdk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputAutosizeTextareaExample {}
`.trim();
  textareaInputcsssource : string =`.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
.mat-card-header-text {  margin: 0!important;}
`.trim();
  disabledInputhtmlsource : string =`<mat-form-field class="example-full-width">
    <input matInput placeholder="Company (disabled)" disabled value="Codetok">
  </mat-form-field>
`.trim();
  disabledInputtssource : string =`import {Component} from '@angular/core';
  @Component({
  selector: 'cdk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DisabledInputExample {}
`.trim();
  disabledInputcsssource : string =`.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
.mat-card-header-text {  margin: 0!important;}
`.trim();
  fixedlengthInputhtmlsource : string =`<mat-form-field class="example-full-width">
      <input matInput #postalCode maxlength="6" placeholder="Postal Code" value="679121">
        <mat-hint align="end">{{postalCode.value.length}} / 6</mat-hint>
  </mat-form-field>`.trim();
  fixedlengthInputtssource : string =`import {Component} from '@angular/core';
@Component({
  selector: 'cdk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FixedLengthExample {}`.trim();
  fixedlengthInputcsssource : string =`.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
.mat-card-header-text {  margin: 0!important;}
`.trim();
  prefixInputhtmlsource : string =`
        <mat-form-field class="example-full-width">
          <span matPrefix>+91 &nbsp;</span>
            <input type="tel" matInput placeholder="Telephone">
              <mat-icon matSuffix>mode_edit</mat-icon>
  </mat-form-field>
  `.trim();
  prefixInputtssource : string =`import {Component} from '@angular/core';
  @Component({
  selector: 'cdk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputPrefixSuffixExample { }
`.trim();
  prefixInputcsssource : string =`.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
.mat-card-header-text {  margin: 0!important;}
`.trim();


 emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  value = 'Clear me';
}
