import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-graph',
  templateUrl: './direct-graph.component.html',
  styleUrls: ['./direct-graph.component.scss']
})
export class DirectGraphComponent implements OnInit {
	options;
	data;
  constructor() { }

  ngOnInit() {
  	this.options = {
			 chart: {
                type: 'forceDirectedGraph',
                height: 450,
                 width: (function(){ return nv.utils.windowSize().width - 450 })(),
                margin:{top: 20, right: 20, bottom: 20, left: 20},
                // color: function(d){
                //     return colour(d.group)
                // },
                nodeExtras: function(node) {
                    node && node
                      .append("text")
                      .attr("dx", 8)
                      .attr("dy", ".35em")
                      .text(function(d) { return d.name })
                      .style('font-size', '10px');
                }
            }
		}
		this.data = [
			{
				key: "One",
				y: 5
			},
			{
				key: "Two",
				y: 2
			},
			{
				key: "Three",
				y: 9
			},
			{
				key: "Four",
				y: 7
			},
			{
				key: "Five",
				y: 4
			},
			{
				key: "Six",
				y: 3
			},
			{
				key: "Seven",
				y: .5
			}
		];
	}
  

}
