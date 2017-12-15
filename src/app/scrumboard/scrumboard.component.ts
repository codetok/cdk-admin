import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.scss']
})
export class ScrumboardComponent {
  
    tasks: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
    developers: Array<string> = [];
    testers: Array<string> = [];

    cards: Array<any> = [
        {title: 'Tasks', tasks: this.tasks },
        { title: 'Developers', tasks: [] },
        { title: 'Testers', tasks: [] }
    ];
}
