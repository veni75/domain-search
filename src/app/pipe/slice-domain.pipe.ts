import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceDomain'
})
export class SliceDomainPipe implements PipeTransform {

  transform(value: any[] | null, clickNumber: number | null): any[] | null {

    if (!Array.isArray(value) || !clickNumber) {
      return value;
    }
    if(clickNumber===0 || clickNumber ===null){
      return value.slice(0, 3);
    }else{
      return value.slice(0, clickNumber*3);
    }
  }
}
