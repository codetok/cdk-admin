import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {SlideshowModule} from 'ng-simple-slideshow';
import { SliderModule } from 'angular-image-slider';
import {CanvasWhiteboardModule} from 'ng2-canvas-whiteboard';




@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    SlideshowModule,
    SliderModule,
    CanvasWhiteboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
