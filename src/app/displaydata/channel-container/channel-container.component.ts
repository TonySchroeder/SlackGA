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

  threadUser: any;
  userName: any;


  constructor(public store: FirebaseService, public firebase: Firestore) {

  }

  ngOnInit(): void {

  }


  /**
   * loading the name of the creator
   *
   * @param userId - creator user id
   * @returns - name of the creator
   */
  loadUserName(userId: string) {
    if (this.store.users) {
      this.userName = this.filterData(userId);
      return this.userName = this.userName[0].userName;
    }
  }


  /**
   * user filter by id
   *
   * @param userId - creator user id
   * @returns - user json
   */
  filterData(userId: string) {
    return this.store.users.filter(object => {
      return object['userId'] == userId;
    });
  }


  async setThreadId(threadId: string, channelId: string) {

    const loadUser = doc(
      this.firebase,
      `users/${this.store.loggedInUserId}`
    );
    updateDoc(loadUser, { currentChannelIdForThread: channelId });
    updateDoc(loadUser, { currentThreadId: threadId });
    await this.store.loggedUserLoadChannelId();

    await this.store.loadThreadFirstMessage();

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
