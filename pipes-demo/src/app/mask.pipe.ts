import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  constructor() {
    console.log("Mask Pipe Object Created...!");
  }

  transform(value: string, maskingChar : string,numOfVisibleChar : number): unknown {
    console.log(value);
    console.log(maskingChar);
    console.log(numOfVisibleChar);
  
    let newValue = '';
    let noOfMaskChar = value.length-numOfVisibleChar;
    for(let i=1;i<=noOfMaskChar;i++){
      newValue = newValue + maskingChar;
    }
    newValue = newValue + value.substring(noOfMaskChar,value.length);
    return newValue;
  }

}
