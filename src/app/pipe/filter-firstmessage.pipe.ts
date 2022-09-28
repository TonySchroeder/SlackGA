import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFirstmessage'
})
export class FilterFirstmessagePipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (value && filterString) {
      if (filterString.lenght === 0 || filterString === '') {
        return undefined;
      }
      const threads = [];
      for (const thread of value) {
        if (thread['currentThreadId'] === filterString) {
          threads.push(thread.thread.firstMessage)
        }
      }
      return threads;
    }
  }

}
