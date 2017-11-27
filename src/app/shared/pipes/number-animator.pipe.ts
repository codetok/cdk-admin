import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval';

@Pipe({
  name: 'numberAnimator'
})
export class NumberAnimatorPipe implements PipeTransform {

  public numberOfIncrements:number = 10;
  public incrementArray:number[] = [];

  transform(value: any, args?: any): any {
    for(let i=0;i<this.numberOfIncrements;i++){
      if(i==(this.numberOfIncrements-1) ) {
        this.incrementArray.push(value);    
      }else{
        if(this.checkInfinity(value/i)) this.incrementArray.push(Math.round(value/i));
      }
    }
    return  Observable.interval(100)
    .take(this.incrementArray.length)
    .map(t => {
      return this.incrementArray[t]
    })          
  }
  checkInfinity(result) {
    if (result != Number.POSITIVE_INFINITY && result != Number.NEGATIVE_INFINITY) {
      return result;    
    }
  }
}
