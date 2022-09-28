import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAnswers'
})
export class FilterThreadsPipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (value && filterString) {
      if (filterString.lenght === 0 || filterString === '') {
        return undefined;
      }
      const threads = [];
      for (const answer of value) {
        if (answer['threadId'] === filterString) {
          threads.push(answer)
        }
      }
      return threads;
    }
  }

}
