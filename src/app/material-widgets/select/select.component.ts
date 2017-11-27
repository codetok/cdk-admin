import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup,FormGroupDirective, NgForm, Validators,FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'cdk-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent implements OnInit{
  public showBasicSelectCode;
  public show2WaySelectCode;
  public showFieldformSelectCode;
  public showDisabledSelectCode;
  public showGroupingSelectCode;
  public showMultipleSelectCode;
  public showPanelSelectCode;
  public showErrorSelectCode;
  
  basicSelecthtmlsource : string = `<mat-form-field>
<mat-select placeholder="Favorite food">
  <mat-option *ngFor="let food of foods" [value]="food.value">
    {{ food.viewValue }}
  </mat-option>
</mat-select>
</mat-form-field>
`.trim();
  basicSelecttssource : string = `import {Component} from '@angular/core';
 @Component({
  selector: 'cdk-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
}) 
export class SelectOverviewExample {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
`.trim();
  basicSelectcsssource : string = `.example-panel-red .mat-select-content {
  background: rgba(255, 0, 0, 0.5);
}

.example-panel-green .mat-select-content {
  background: rgba(0, 255, 0, 0.5);
}

.example-panel-blue .mat-select-content {
  background: rgba(0, 0, 255, 0.5);
}`.trim();
  TwoWaySelecthtmlsource : string = `<mat-form-field>
  <mat-select [(value)]="selected">
    <mat-option>None</mat-option>
    <mat-option value="option1">Option 1</mat-option>
    <mat-option value="option2">Option 2</mat-option>
    <mat-option value="option3">Option 3</mat-option>
  </mat-select>
</mat-form-field>
<p>You selected: {{selected}}</p>
`.trim();
  TwoWaySelecttssource : string = `import {Component} from '@angular/core';
  @Component({
  selector: 'cdk-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectValueBindingExample {
  selected = 'option2';
}
`.trim();
  TwoWaySelectcsssource : string = `.example-panel-red .mat-select-content {
  background: rgba(255, 0, 0, 0.5);
}

.example-panel-green .mat-select-content {
  background: rgba(0, 255, 0, 0.5);
}

.example-panel-blue .mat-select-content {
  background: rgba(0, 0, 255, 0.5);
}`.trim();
  FieldformSelecthtmlsource : string = `<mat-form-field>
  <mat-select placeholder="Favorite animal" [formControl]="animalControl" required>
    <mat-option></mat-option>
    <mat-option *ngFor="let animal of animals" [value]="animal">
      {{animal.name}}
    </mat-option>
  </mat-select>
  <mat-error *ngIf="animalControl.hasError('required')">Please choose an animal</mat-error>
  <mat-hint>{{animalControl.value?.sound}}</mat-hint>
</mat-form-field>
`.trim();
  FieldformSelecttssource : string = `import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'cdk-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectHintErrorExample {
  animalControl = new FormControl('', [Validators.required]);

  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
}
`.trim();
  FieldformSelectcsssource : string = `.example-panel-red .mat-select-content {
  background: rgba(255, 0, 0, 0.5);
}

.example-panel-green .mat-select-content {
  background: rgba(0, 255, 0, 0.5);
}

.example-panel-blue .mat-select-content {
  background: rgba(0, 0, 255, 0.5);
}`.trim();
  DisabledSelecthtmlsource : string = `<p>
  <mat-checkbox [formControl]="disableSelect">Disable select</mat-checkbox>
</p>
<p>
  <mat-form-field>
    <mat-select placeholder="Choose an option" [disabled]="disableSelect.value">
      <mat-option value="option1">Option 1</mat-option>
      <mat-option value="option2" disabled>Option 2 (disabled)</mat-option>
      <mat-option value="option3">Option 3</mat-option>
    </mat-select>
  </mat-form-field>
</p>
`.trim();
  DisabledSelecttssource : string = `import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'cdk-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectDisabledExample {
  disableSelect = new FormControl(false);
}
`.trim();
  DisabledSelectcsssource : string = `.example-panel-red .mat-select-content {
  background: rgba(255, 0, 0, 0.5);
}

.example-panel-green .mat-select-content {
  background: rgba(0, 255, 0, 0.5);
}

.example-panel-blue .mat-select-content {
  background: rgba(0, 0, 255, 0.5);
}`.trim();
  GroupingSelecthtmlsource : string = `<mat-form-field>
  <mat-select placeholder="Pokemon" [formControl]="pokemonControl">
    <mat-option>-- None --</mat-option>
    <mat-optgroup *ngFor="let group of pokemonGroups" [label]="group.name"
                  [disabled]="group.disabled">
      <mat-option *ngFor="let pokemon of group.pokemon" [value]="pokemon.value">
        {{ pokemon.viewValue }}
      </mat-option>
    </mat-optgroup>
  </mat-select>
</mat-form-field>`.trim();
  GroupingSelecttssource : string = `import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'cdk-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectOptgroupExample {
  pokemonControl = new FormControl();

  pokemonGroups = [
    {
      name: 'Grass',
      pokemon: [
        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
        { value: 'oddish-1', viewValue: 'Oddish' },
        { value: 'bellsprout-2', viewValue: 'Bellsprout' }
      ]
    },
    {
      name: 'Water',
      pokemon: [
        { value: 'squirtle-3', viewValue: 'Squirtle' },
        { value: 'psyduck-4', viewValue: 'Psyduck' },
        { value: 'horsea-5', viewValue: 'Horsea' }
      ]
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        { value: 'charmander-6', viewValue: 'Charmander' },
        { value: 'vulpix-7', viewValue: 'Vulpix' },
        { value: 'flareon-8', viewValue: 'Flareon' }
      ]
    },
    {
      name: 'Psychic',
      pokemon: [
        { value: 'mew-9', viewValue: 'Mew' },
        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
      ]
    }
  ];
}
`.trim();
  GroupingSelectcsssource : string = `.example-panel-red .mat-select-content {
  background: rgba(255, 0, 0, 0.5);
}

.example-panel-green .mat-select-content {
  background: rgba(0, 255, 0, 0.5);
}

.example-panel-blue .mat-select-content {
  background: rgba(0, 0, 255, 0.5);
}`.trim();
  MultipleSelecthtmlsource : string = `<mat-form-field>
  <mat-select placeholder="Toppings" [formControl]="toppings" multiple>
    <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
  </mat-select>
</mat-form-field>
`.trim();
  MultipleSelecttssource : string = `import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'cdk-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectMultipleExample {
  toppings = new FormControl();

  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
`.trim();
  MultipleSelectcsssource : string = `.example-panel-red .mat-select-content {
  background: rgba(255, 0, 0, 0.5);
}

.example-panel-green .mat-select-content {
  background: rgba(0, 255, 0, 0.5);
}

.example-panel-blue .mat-select-content {
  background: rgba(0, 0, 255, 0.5);
}`.trim();
  PanelSelecthtmlsource : string = `<mat-form-field>
  <mat-select placeholder="Panel color" [formControl]="panelColor"
              panelClass="example-panel-{{panelColor.value}}">
    <mat-option value="red">Red</mat-option>
    <mat-option value="green">Green</mat-option>
    <mat-option value="blue">Blue</mat-option>
  </mat-select>
</mat-form-field> 
<mat-form-field>
  <mat-select placeholder="Choose one" [formControl]="selected2" [errorStateMatcher]="matcher">
    <mat-option>Clear</mat-option>
    <mat-option value="valid">Valid option</mat-option>
    <mat-option value="invalid">Invalid option</mat-option>
  </mat-select>
  <mat-hint>Errors appear instantly!</mat-hint>
  
  <mat-error *ngIf="selected2.hasError('required')">You must make a selection</mat-error>
  <mat-error *ngIf="selected2.hasError('pattern') ">
    Your selection is invalid
  </mat-error>
 </mat-form-field>
 `.trim();
  PanelSelecttssource : string = `import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cdk-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectPanelClassExample {
  panelColor = new FormControl('red');
}
`.trim();
  PanelSelectcsssource : string = `.example-panel-red .mat-select-content {
  background: rgba(255, 0, 0, 0.5);
}

.example-panel-green .mat-select-content {
  background: rgba(0, 255, 0, 0.5);
}

.example-panel-blue .mat-select-content {
  background: rgba(0, 0, 255, 0.5);
}`.trim();

ErrorSelecthtmlsource : string = `<mat-form-field>
  <mat-select placeholder="Choose one" [formControl]="selected2" [errorStateMatcher]="matcher">
    <mat-option>Clear</mat-option>
    <mat-option value="valid">Valid option</mat-option>
    <mat-option value="invalid">Invalid option</mat-option>
  </mat-select>
  <mat-hint>Errors appear instantly!</mat-hint>
  
  <mat-error *ngIf="selected2.hasError('required')">You must make a selection</mat-error>
  <mat-error *ngIf="selected2.hasError('pattern') ">
    Your selection is invalid
  </mat-error>
 </mat-form-field>`.trim();
ErrorSelecttssource : string = `import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'cdk-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectErrorStateMatcherExample {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();
}
`.trim();
ErrorSelectcsssource : string = `.example-panel-red .mat-select-content {
  background: rgba(255, 0, 0, 0.5);
}

.example-panel-green .mat-select-content {
  background: rgba(0, 255, 0, 0.5);
}

.example-panel-blue .mat-select-content {
  background: rgba(0, 0, 255, 0.5);
}`.trim();

	selectGroup: FormGroup;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
selected = 'option2';
 animalControl = new FormControl('', [Validators.required]);

  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  disableSelect = new FormControl(false);

   pokemonControl = new FormControl();

  pokemonGroups = [
    {
      name: 'Grass',
      pokemon: [
        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
        { value: 'oddish-1', viewValue: 'Oddish' },
        { value: 'bellsprout-2', viewValue: 'Bellsprout' }
      ]
    },
    {
      name: 'Water',
      pokemon: [
        { value: 'squirtle-3', viewValue: 'Squirtle' },
        { value: 'psyduck-4', viewValue: 'Psyduck' },
        { value: 'horsea-5', viewValue: 'Horsea' }
      ]
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        { value: 'charmander-6', viewValue: 'Charmander' },
        { value: 'vulpix-7', viewValue: 'Vulpix' },
        { value: 'flareon-8', viewValue: 'Flareon' }
      ]
    },
    {
      name: 'Psychic',
      pokemon: [
        { value: 'mew-9', viewValue: 'Mew' },
        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
      ]
    }
  ];
  toppings = new FormControl();

  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  panelColor = new FormControl('red');
 
 selected2 = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();


  constructor(private _formBuilder: FormBuilder) { }
   ngOnInit() { 
       this.selectGroup = this._formBuilder.group({ 
             animalControl: ['', Validators.required],
             disableSelect: ['', Validators.required],
             pokemonControl: ['', Validators.required],
             toppings: ['', Validators.required],
             panelColor: ['', Validators.required],
             selected2: ['', Validators.required],
		});   
	}
}
