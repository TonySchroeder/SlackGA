import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChannels'
})
export class FilterChannelsPipe implements PipeTransform {

  transform(value: any, filterString: any): any {

    if (value) {
      if (filterString.lenght === 0 || filterString === '') {
        return value;
      }
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
