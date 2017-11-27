import { NgModule } from '@angular/core';
import { HexToRgbPipe } from './hex-to-rgb.pipe';
import { NumberAnimatorPipe } from './number-animator.pipe';



@NgModule({
    declarations: [
    	HexToRgbPipe,
    	NumberAnimatorPipe
    ],
    imports: [],
    exports: [
        HexToRgbPipe,
        NumberAnimatorPipe
    ],
})
export class PipesModule {}
