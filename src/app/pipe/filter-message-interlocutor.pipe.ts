import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMessageInterlocutor'
})
export class FilterMessageInterlocutorPipe implements PipeTransform {

  transform(value: any, filterString: any, filterString2: any): any {
    if (value && filterString && filterString2) {
      // if (filterString.lenght === 0 || filterString === '') {
      //   return undefined;
      // }
      const firstFiltration = [];
      const messages = [];
      for (const message of value) {
        if (message['interlocutor'].includes(filterString)) {
          firstFiltration.push(message)
        }
      }
      for (const message of firstFiltration) {
        if (message['interlocutor'].includes(filterString2)) {
          messages.push(message)
        }
      }
      return messages;
    }
  }

}
