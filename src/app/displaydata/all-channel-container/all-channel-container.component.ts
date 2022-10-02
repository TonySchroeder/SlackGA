import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, updateDoc } from 'firebase/firestore';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-all-channel-container',
  templateUrl: './all-channel-container.component.html',
  styleUrls: ['./all-channel-container.component.scss']
})
export class AllChannelContainerComponent implements OnInit {

  constructor(public store: FirebaseService, public firebase: Firestore) { }

  ngOnInit(): void {
  }


  /**
   * open selected channel
   *
   * @param channelId - id of the selected channel
   */
  setChannelId(channelId: string) {
    const loadUser = doc(
      this.firebase,
      `users/${this.store.loggedInUserId}`
    );
    updateDoc(loadUser, { currentChannelId: channelId });
    updateDoc(loadUser, { currentUserMessageId: '' });
    this.store.loggedUserLoadChannelId();
  }

}
