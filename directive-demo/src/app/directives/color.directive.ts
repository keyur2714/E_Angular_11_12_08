import { AfterViewInit, Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector : '[app-color]'
})
export class ColorDirective implements AfterViewInit,OnInit{

    @Input() color : string = 'blue';
    @Input("font-size") fontSize : string = '25px';
    @Input() border : string = '5px solid green';
    @Input("back-color") background : string = 'yellow';

    constructor(private element : ElementRef){
        console.log("Color Directive Object Created...!");
    }

    ngOnInit() {        
        console.log("Element :- "+this.element.nativeElement);
    }

    ngAfterViewInit(){
        console.log("Element : "+this.element.nativeElement);
        this.element.nativeElement.style.color = this.color;
        this.element.nativeElement.style.fontSize = this.fontSize;
        this.element.nativeElement.style.border = this.border;
        this.element.nativeElement.style.background = this.background;
    }
}