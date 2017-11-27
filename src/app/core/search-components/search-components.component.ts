import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cdk-search-components',
  templateUrl: './search-components.component.html',
  styleUrls: ['./search-components.component.scss']
})
export class SearchComponentsComponent implements OnInit {

  bigMenu:boolean = false;
  @Input() open;
  public menuItems:string[] = ['Dashboard','chat','fixed header table','Material icons']  
  constructor() { }

  ngOnInit() {
  }
}
