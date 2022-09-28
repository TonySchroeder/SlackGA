import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChannelname'
})
export class FilterChannelnamePipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (value && filterString) {
      if (filterString.lenght === 0 || filterString === '') {
        return undefined;
      }
      const threads = [];
      for (const channel of value) {
        if (channel['channelId'] === filterString) {
          threads.push(channel.channel.channelName)
        }
      }
      return threads;
    }
  }

}
