import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {

  constructor(private templateRef : TemplateRef<any>,private viewContainerRef : ViewContainerRef) { 
    console.log("MyLoopDirective Object Created...!");
  }

  @Input("appMyLoop") set myLoop(loopCounter : number) {
    console.log("Loop Counter : "+loopCounter);
    for(let i=1;i<=loopCounter;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  @Input("appMyLoopStart") set start(start : number) {
    console.log("Start Index: "+start);
  }

}
