import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { doc, updateDoc } from 'firebase/firestore';
import { DialogAddChannelComponent } from '../dialog/dialog-add-channel/dialog-add-channel.component';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.scss']
})
export class LeftContainerComponent implements OnInit {

  displayFavorites = false;
  displayChannels = false;
  displayDirectMessage = false;


  constructor(public dialog: MatDialog, public store: FirebaseService, public firebase: Firestore) {

  }

  ngOnInit(): void {
    // this.store.loadChannels();
    // this.store.loadUser();
  }

  openDialog(): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogAddChannelComponent, {
      maxWidth: '520px',
    });
  }

  setChannelId(channelId: string, channelName: string) {
    this.setUserChannelId(channelId);
    // this.store.currentUserMessageId = undefined;
  }



  setMessageId(userId: string) {
    this.setUserMessageId(userId)
    // this.store.currentChannelId = undefined;
  }



  setUserChannelId(channelId: string) {

    const loadUser = doc(
      this.firebase,
      `users/${this.store.loggedInUserId}`
    );
    updateDoc(loadUser, { currentChannelId: channelId });
    updateDoc(loadUser, { currentUserMessageId: '' });
    this.store.loggedUserLoadChannelId();

  }




  setUserMessageId(userId: string) {

    const loadUser = doc(
      this.firebase,
      `users/${this.store.loggedInUserId}`
    );
    updateDoc(loadUser, { currentChannelId: '' });
    updateDoc(loadUser, { currentUserMessageId: userId });
    this.store.loggedUserLoadChannelId();

  }
}

