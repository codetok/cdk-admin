import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexToRgb'
})
export class HexToRgbPipe implements PipeTransform {

  transform(hex: any, opacity:any = 0): any {
   return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(opacity||1).join(',') + ')';
  }

}
