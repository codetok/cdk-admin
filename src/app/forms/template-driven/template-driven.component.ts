import { Component, OnInit } from '@angular/core';
import { Hero }    from './user';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent  {
	 districts = ['Thrissur', 'Ernakulam',
            'kottayam', 'Malappuram'];
   model = new Hero(18, 'User', this.districts[0], 9999999999);
   submitted = false;
 
  onSubmit() { this.submitted = true; }
 
  newHero() {
    this.model = new Hero(42, '', '');
  }
}
