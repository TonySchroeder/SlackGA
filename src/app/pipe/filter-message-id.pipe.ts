import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMessageId'
})
export class FilterMessageIdPipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (value && filterString) {
           const messages = [];
      for (const message of value) {
        if (message['currentMessageId'] === filterString) {
          messages.push(message)
        }
      }
      return messages;
    }
  }

}
