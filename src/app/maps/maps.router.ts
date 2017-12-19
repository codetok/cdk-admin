import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';

const mapsRoutes: Routes = [
    {path: 'googlemap', component: GoogleMapComponent , data: { animation: 'googlemap' }},
    {path: 'leafletmap', component: LeafletMapComponent ,data: { animation: 'leafletmap' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(mapsRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class MapsRouterModule {}