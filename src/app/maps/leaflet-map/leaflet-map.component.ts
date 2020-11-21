import { Component, OnInit , ViewChild,ElementRef} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {
	@ViewChild('mapid') mapElement: ElementRef;
	@ViewChild('mapContainer', { static: true }) mapContainer: any;
	public map: any;
	height: string = '500px';
	constructor() {
	 }

	ngOnInit() {
		setTimeout(() => {
			let h = this.mapContainer.nativeElement.offsetHeight - 10;
			this.height = String(h) + 'px';
			this.loadMap();
		},300);
	}
	private loadMap() {
		this.map = L.map('mapid', {
			center: [10.025810237149164, 76.31248180688476],
			zoom: 13,
			zoomControl: false
		});
		L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmFteWFyYWoiLCJhIjoiY2phM3g5d3RkNnhuZTMzczJqNmF1bmQ5cSJ9.Ss2fPw0E6VMMVkKhUE1ksw', {
			minZoom: 0,
			maxZoom: 30,
			id: 'mapbox.streets'
		}).addTo(this.map);
		L.marker([10.025810237149164, 76.31248180688476]).addTo(this.map);
		L.circle([10.025810237149164, 76.31248180688476], {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: 500
		}).addTo(this.map);
	}


}

