import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-crm',
  templateUrl: './dashboard-crm.component.html',
  styleUrls: ['./dashboard-crm.component.scss']
})
export class DashboardCrmComponent implements OnInit {

    public dashCard = [
        {colorDark: '#5C6BC0',colorLight: '#7986CB', number: 1221, title: 'SALES',icon:'local_grocery_store'},
        {colorDark: '#42A5F5',colorLight: '#64B5F6', number: 1221, title: 'LEADS',icon:'new_releases'},
        {colorDark: '#26A69A',colorLight: '#4DB6AC', number: 1221, title: 'ASSIGNMENTS',icon:'assignments'},
        {colorDark: '#66BB6A',colorLight: '#81C784', number: 1221, title: 'BANKING',icon:'account_balance'}
    ]

    constructor() { }

    ngOnInit() {
    }

}
