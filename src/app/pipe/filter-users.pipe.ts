import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (value && filterString) {
       const threads = [];
      for (const user of value) {
        if (user['userId'] === filterString) {
          threads.push(user.userName + ' ' + user.userLastName)
        }
      }
      return threads;
    }
  }

}
