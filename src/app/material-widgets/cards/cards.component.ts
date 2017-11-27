import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
public showCardsCode;
  basicCardshtmlsource : string = `
  	<mat-card class="example-card">
        <mat-card-header>
            <div mat-card-avatar class="example-header-image">
                <img mat-card-image src="/assets/cards/shibainu.jpg" alt="Photo of a Shiba Inu">
            </div>
            <mat-card-title>Shiba Inu</mat-card-title>
                <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="/assets/cards/220px-Taka_Shiba.jpg" alt="Photo of a Shiba Inu">
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
      `.trim();
	basicCardstssource : string = `
	import { Component } from '@angular/core';
declare const Chart;

@Component({
  selector: 'cdk-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
	 ngOnInit() {

  }
}
`.trim();
	basicCardscsssource : string = `
	.example-card {
  width: 400px;
}

.example-header-image {
  background-image: url('../../../assets/img/examples/shiba1.jpg');
  background-size: cover;
}
`.trim();
  

}
