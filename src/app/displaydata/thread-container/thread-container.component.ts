import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-thread-container',
  templateUrl: './thread-container.component.html',
  styleUrls: ['./thread-container.component.scss']
})
export class ThreadContainerComponent implements OnInit {

  firstMessage: any;
  currentChannel: any;

  constructor(public store: FirebaseService) { }

  ngOnInit(): void {


  }

  loadFirstMessage() {
    // if (this.store.channels) {

      this.currentChannel = this.filterData(this.store.currentChannelIdForThread);
console.log(this.currentChannel);

      // return this.firstMessage = this.firstMessage[0].channel.channelName;
      // this.firstMessage = this.filterData(this.store.currentChannelIdForThread);

      return this.store.currentChannelIdForThread;
    // }
  }


  filterData(channelId: string) {
    return this.store.channels.filter(object => {
      return object['channelId'] == channelId;
    });
  }

}
