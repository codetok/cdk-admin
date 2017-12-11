import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';

const mapsRoutes: Routes = [
    {path: 'googlemap', component: GoogleMapComponent}
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