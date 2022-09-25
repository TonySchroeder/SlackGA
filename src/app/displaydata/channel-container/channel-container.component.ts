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


  constructor(public firestore: FirebaseService, public firebase: Firestore) {

  }

  ngOnInit(): void {


  }


  loadUserName(userId: string) {
    this.userName = this.filterData(userId);
    return this.userName = this.userName[0].userName;
  }


  filterData(userId: string) {
    return this.firestore.users.filter(object => {
      return object['userId'] == userId;
    });
  }

  setThreadId(threadId: string) {
    this.firestore.currentThreadId = threadId;
    this.firestore.currentThreadName = this.firestore.currentChannelName;
    this.firestore.loadCurrentThread();
    this.firestore.loadThreadFirstMessage();

    this.openSideBar();
  }


  openSideBar() {
    if (!this.firestore.openRightNav) {
      const loadUserSideBar = doc(
        this.firebase,
        `users/${this.firestore.loggedInUserId}`
      );
      updateDoc(loadUserSideBar, { openSideBar: true });
      this.firestore.loggedUserLoadSideBar();
    }
  }





}
