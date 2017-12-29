import { Component, OnInit ,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
@Component({
    selector: 'cdk-dashcard',
    templateUrl: './dashcard.component.html',
    styleUrls: ['./dashcard.component.scss']
})
export class DashcardComponent implements OnInit {
     
    @Input() dashData: any;
    
    constructor() {

     }

    ngOnInit() {
    }

}
