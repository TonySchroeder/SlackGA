import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSelectChannel'
})
export class FilterSelectChannelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
