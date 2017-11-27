import { Component, OnInit } from '@angular/core';
import 'highlight.js/styles/github.css';

@Component({
  selector: 'cdk-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  public showNavListCode1;
  public showNavListCode2;
  public showNavListCode3;
  public showNavListCode4;
  public showNavListCode;
  tssource: string = `import { Component } from '@angular/core';

  @Component({
    template: 'Hello {{ name }}'
  })
  class HelloWorldComponent {
  name: string = 'World!';
  }`.trim();
  htmlsource_basic:string = `<h3>Basic Buttons</h3>
<div class="button-row">
  <button mat-button>Basic</button>
  <button mat-button color="primary">Primary</button>
  <button mat-button color="accent">Accent</button>
  <button mat-button color="warn">Warn</button>
  <button mat-button disabled>Disabled</button>
  <a mat-button routerLink=".">Link</a>
</div>`.trim();

 htmlsource_raised:string = `<h3>Raised Buttons</h3>
<div class="button-row">
  <button mat-raised-button>Basic</button>
  <button mat-raised-button color="primary">Primary</button>
  <button mat-raised-button color="accent">Accent</button>
  <button mat-raised-button color="warn">Warn</button>
  <button mat-raised-button disabled>Disabled</button>
  <a mat-raised-button routerLink=".">Link</a>
</div>`.trim();

 htmlsource_icon:string = `
<div class="button-row">
  <button mat-icon-button>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <button mat-icon-button color="primary">
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <button mat-icon-button color="accent">
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <button mat-icon-button color="warn">
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <button mat-icon-button disabled>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
</div>`

 htmlsource_fab:string = `
<div class="button-row">
  <button mat-fab>Basic</button>
  <button mat-fab color="primary">Primary</button>
  <button mat-fab color="accent">Accent</button>
  <button mat-fab color="warn">Warn</button>
  <button mat-fab disabled>Disabled</button>
  <button mat-fab>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <a mat-fab routerLink=".">Link</a>
</div>`

 htmlsource_mini:string = `
<div class="button-row">
  <button mat-mini-fab>Basic</button>
  <button mat-mini-fab color="primary">Primary</button>
  <button mat-mini-fab color="accent">Accent</button>
  <button mat-mini-fab color="warn">Warn</button>
  <button mat-mini-fab disabled>Disabled</button>
  <button mat-mini-fab>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <a mat-mini-fab routerLink=".">Link</a>
</div>
    ` 
  public showSource:boolean = false;  
  constructor() { }

  ngOnInit() {
  }

}
