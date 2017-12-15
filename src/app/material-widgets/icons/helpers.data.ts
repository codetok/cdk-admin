export const ICON_HELPERS: any = {

	tsSourceIcons: `
import { MatIconModule} from '@angular/material';
	
		@NgModule({
		  imports: [
		   MatIconModule
		})
		export class AppModule { }

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'cdk-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
}
	`.trim(),
	htmlSourceIcons: `
<mat-card class="example at-elevation-z12">
	<mat-icon class="space" aria-label="Example icon-button with a heart icon">favorite</mat-icon>
	<mat-icon class="space">home</mat-icon>
	<mat-icon class="space">menu</mat-icon>
	<mat-icon class="space">code</mat-icon>
</mat-card>
	`.trim(),
}