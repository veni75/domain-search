import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceDomain'
})
export class SliceDomainPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
