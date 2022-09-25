import { Component, OnInit } from '@angular/core';
import { Firestore, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.scss']
})
export class RightContainerComponent implements OnInit {

  channelName: any;


  constructor(public store: FirebaseService, public firebase: Firestore) { }

  ngOnInit(): void {
  }



  loadChannelName(channelId: string) {
    if(this.store.channels){
      this.channelName = this.filterData(channelId);
      return this.channelName = this.channelName[0].channel.channelName;
    }
  }


  filterData(channelId: string) {
    return this.store.channels.filter(object => {
      return object['channelId'] == channelId;
    });
  }



  closeSideBar() {

    const loadUserSideBar = doc(
      this.firebase,
      `users/${this.store.loggedInUserId}`
    );
    updateDoc(loadUserSideBar, { openSideBar: false });
    this.store.loggedUserLoadSideBar();

  }


}
