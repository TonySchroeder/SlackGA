import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSelectThread'
})
export class FilterSelectThreadPipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (value && filterString) {
      if (filterString.lenght === 0 || filterString === '') {
        return undefined;
      }
      const threads = [];
      for (const thread of value) {
        if (thread['currentThreadId'] === filterString) {
          threads.push(thread)
        }
      }
      return threads;
    }
  }

}
