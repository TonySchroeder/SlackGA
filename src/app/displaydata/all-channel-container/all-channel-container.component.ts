import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-all-channel-container',
  templateUrl: './all-channel-container.component.html',
  styleUrls: ['./all-channel-container.component.scss']
})
export class AllChannelContainerComponent implements OnInit {

  constructor(public firestore: FirebaseService) { }

  ngOnInit(): void {
  }


  setChannelId(channelId: string, channelName) {
    this.firestore.currentChannelId = channelId;
    this.firestore.currentChannelName = channelName;
    this.firestore.currentUserMessageId = undefined;
    this.firestore.loadCurrentChannel();
    this.firestore.loadloggedInUser();
  }


}
