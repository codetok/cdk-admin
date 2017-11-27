import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { FlexLayoutModule } from "@angular/flex-layout";

export const ROUTES: Routes = [
	{ path: 'googlemap', component: GoogleMapComponent },
	{ path: 'leafletmap', component: LeafletMapComponent }]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FlexLayoutModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXTJwhYqJ6Pc7VXGRMTv40N1WRLqzuSNs'
    })
  ],
  declarations: [GoogleMapComponent, LeafletMapComponent]
})
export class MapsModule { }
