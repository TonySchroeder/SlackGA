import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMessageInterlocutor'
})
export class FilterMessageInterlocutorPipe implements PipeTransform {

  transform(messagesArray: any, firstInterlocutorId: any, secoundInterlocutorId: any): any {
    if (messagesArray && firstInterlocutorId && secoundInterlocutorId) {
      const firstFiltration = [];
      const messages = [];
      for (const message of messagesArray) {
        if (message['interlocutor'].includes(firstInterlocutorId)) {
          firstFiltration.push(message)
        }
      }
      for (const message of firstFiltration) {
        if (message['interlocutor'].includes(secoundInterlocutorId)) {
          messages.push(message)
        }
      }
      return messages;
    }
  }

}
