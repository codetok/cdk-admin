import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
public navigations=[
{name:"Hari",job:"Full Stack Developer",experience:"10 Yrs",link:"fdsg"},
{name:"Sujith",job:"Full Stack Developer",experience:"6 Yrs",link:"fdsg"},
{name:"Ramya",job:"Full Stack Developer",experience:"4 Yrs",link:"fdsg"},
{name:"Sree",job:"Full Stack Developer",experience:"2 Yrs",link:"fdsg"},
{name:"Sruthy",job:"Full Stack Developer",experience:"2 Yrs",link:"fdsg"},
{name:"Fahad",job:"Full Stack Developer",experience:"2 Yrs",link:"fdsg"}
]
  constructor() { }

  ngOnInit() {
  }

}
