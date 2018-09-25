import { MatSnackBar } from '@angular/material';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  OnInit
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { pairwise, switchMap, takeUntil } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gate-example',
  templateUrl: './gate-example.component.html',
  styleUrls: ['./gate-example.component.scss']
})
export class GateExampleComponent implements OnInit,AfterViewInit, OnDestroy{
  productCustomize:boolean=false;
  clickedOnce:boolean=false;
  message = 'Added to the cart!';
  action = 'OK';
  @Input() width = 500;
  @Input() height = 500;
  @ViewChild('canvas') canvas: ElementRef;
  cx: CanvasRenderingContext2D;
  drawingSubscription: Subscription;
  cl:HTMLCanvasElement;
  constructor(
    public snackBar: MatSnackBar
  ) { }

  ngAfterViewInit() {
    
    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cl=canvasEl;
    this.cx = canvasEl.getContext('2d');

    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    // set some default properties about the line
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    // we'll implement this method to start capturing mouse events
    this.captureEvents(canvasEl);
    
  }

  reloadCanvas()
  {
   // window.location.reload();
    this.cx.clearRect(0,0,this.cl.width,this.cl.height);
  }
  saveToImage()
  {
    //this.canvasEl.
    var image = this.cl.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
window.location.href=image;

   // var link = this.cl.toDataURL();
  }

  drawOnCanvas(
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number }
  ) {
    // incase the context is not set
    if (!this.cx) {
      return;
    }

    // start our drawing path
    this.cx.beginPath();

    // we're drawing lines so we need a previous position
    if (prevPos) {
      // sets the start point
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      // draws a line from the start pos until the current position
      this.cx.lineTo(currentPos.x, currentPos.y);

      // strokes the current path with the styles we set earlier
      this.cx.stroke();
    }
  }

  ngOnDestroy() {
    // this will remove event lister when this component is destroyed
    this.drawingSubscription.unsubscribe();
  }

  captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from teh canvas element
    this.drawingSubscription = fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap(e => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove').pipe(
            // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point
            pairwise()
          );
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();

        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };

        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  ngOnInit() {
  }
  customize(e)
  {
    if(e.checked)
    {
      //console.log("want");
      this.productCustomize=true;
    }
    else 
    {
      //console.log("dont")
      this.productCustomize=false;
    }
/*
    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cl=canvasEl;
    this.cx = canvasEl.getContext('2d');

    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    // set some default properties about the line
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    // we'll implement this method to start capturing mouse events
    this.captureEvents(canvasEl);
*/
  }
  addToCart()
  {
    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });
    this.clickedOnce=true;
  }

}
