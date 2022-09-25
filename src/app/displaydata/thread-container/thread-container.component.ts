import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-thread-container',
  templateUrl: './thread-container.component.html',
  styleUrls: ['./thread-container.component.scss']
})
export class ThreadContainerComponent implements OnInit {

  firstMessage: any;


  constructor(public store: FirebaseService) { }

  ngOnInit(): void {

  }

  loadFirstMessage() {
    if (this.store.currentChannel) {
      this.firstMessage = this.filterData(this.store.currentThreadId);
      if (this.firstMessage.lenght > 0) {
        console.log(this.firstMessage);

        return this.firstMessage = this.firstMessage[0].thread.threadFirstMessage;
      }

    }
  }


  filterData(threadId: string) {
    return this.store.currentChannel.filter(object => {
      return object['threadId'] == threadId;
    });
  }

}
