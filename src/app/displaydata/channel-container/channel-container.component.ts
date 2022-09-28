import { Component, OnInit } from '@angular/core';
import { Firestore, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { filter } from 'rxjs';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-channel-container',
  templateUrl: './channel-container.component.html',
  styleUrls: ['./channel-container.component.scss']
})
export class ChannelContainerComponent implements OnInit {

  userName: any;
  threadAnswer: any;


  constructor(public store: FirebaseService, public firebase: Firestore) {

  }

  ngOnInit(): void {

  }



  async setThreadId(threadId: string, channelId: string) {
    const loadUser = doc(
      this.firebase,
      `users/${this.store.loggedInUserId}`
    );
    updateDoc(loadUser, { currentChannelIdForThread: channelId });
    updateDoc(loadUser, { currentThreadId: threadId });
    await this.store.loggedUserLoadChannelId();

    this.openSideBar();
  }


  openSideBar() {
    if (!this.store.openRightNav) {
      const loadUserSideBar = doc(
        this.firebase,
        `users/${this.store.loggedInUserId}`
      );
      updateDoc(loadUserSideBar, { openSideBar: true });
      this.store.loggedUserLoadSideBar();
    }
  }





}
