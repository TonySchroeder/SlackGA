import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterInitialen'
})
export class FilterInitialenPipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (value && filterString) {
            const threads = [];
      for (const user of value) {
        if (user['userId'] === filterString) {
          threads.push(user.userName.charAt(0) + ' ' + user.userLastName.charAt(0))
        }
      }
      return threads;
    }
  }

}
