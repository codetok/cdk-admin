export const BUTTON_HELPERS: any = {

 	tsSourceRaisedButton: `
 		import { MatButtonModule } from '@angular/material/button';

	  	@NgModule({
		  imports: [
		    MatButtonModule,
		})
		export class AppModule { }`.trim(),

  	htmlSourceRaisedButton: `
  		
		  <button mat-raised-button>Basic</button>
		  <button mat-button color="primary">Primary</button>
		  <button mat-icon-button color="accent">
                <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
                </button>
		  <button mat-raised-button disabled>Disabled</button>
                <button mat-mini-fab>
                <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
                </button>
		  <a mat-button routerLink=".">Link</a>
		`.trim(),

 };
	
