import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNumberOfAnswers'
})
export class FilterNumberOfAnswersPipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (value && filterString) {
      if (filterString.length === 0 || filterString === '') {
        return undefined;
      }
      const threads = [];
      // let answersLength;
      for (const answer of value) {
        if (answer['threadId'] === filterString) {
          threads.push(answer)
        }
      }
      // answersLength = threads.length;
      return threads.length;
    }
  }

}
