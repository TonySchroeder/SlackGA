import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterThreads'
})
export class FilterChannelsPipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (value && filterString) {
      const threads = [];
      for (const thread of value) {
        if (thread['channelId'] === filterString) {
          threads.push(thread)
        }
      }
      return threads;
    }
  }

}
