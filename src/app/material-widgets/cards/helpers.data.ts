export const CARDS_HELPERS: any = {

	tsSourceCards: `

        import { MatCardModule } from '@angular/material/button';

          @NgModule({
          imports: [
            MatCardModule,
        })
        export class AppModule { }

        import { Component, OnInit } from '@angular/core';

        @Component({
          selector: 'cdk-cards',
          templateUrl: './cards.component.html',
          styleUrls: ['./cards.component.scss']
        })
        export class CardsComponent implements OnInit {
        }
`.trim(),
	htmlSourceCards: `
<div  fxLayoutAlign="space-around stretch" fxLayoutWrap >
    <mat-card>
        <mat-card-header>
            <div mat-card-avatar class="example-header-image">
            </div>
            <mat-card-title>Shiba Inu</mat-card-title>
            <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="/assets/220px-Taka_Shiba.jpg" alt="Photo of a Shiba Inu">

        <mat-card-content>
            <p>
                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
                bred for hunting.
            </p>
        </mat-card-content>
        <mat-card-actions>
            <button mat-button>LIKE</button>
            <button mat-button>SHARE</button>
        </mat-card-actions>
    </mat-card>
</div>
`.trim(),
};