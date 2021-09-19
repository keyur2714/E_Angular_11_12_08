import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private templateRef : TemplateRef<any>,private viewContainerRef : ViewContainerRef) { 
    console.log("MyIfDirecive Object Created...!");
  }

  @Input("appMyIf") set myIf(flag : boolean){
    console.log(flag);
    if(flag){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }

}
