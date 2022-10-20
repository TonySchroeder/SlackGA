import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserMail'
})
export class FilterUserMailPipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (value && filterString) {
       const threads = [];
      for (const user of value) {
        if (user['userId'] === filterString) {
          threads.push(user.email)
        }
      }
      return threads;
    }
  }

}
