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
  }



  openDialog(): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogAddChannelComponent, {
      maxWidth: '520px',
    });
  }



  displayChannelsThreadsOrMessages(channelId, messageId) {
    const loadUser = doc(
      this.firebase,
      `users/${this.store.loggedInUserId}`
    );
    updateDoc(loadUser, { currentChannelId: channelId });
    updateDoc(loadUser, { currentUserMessageId: messageId });
    this.store.loggedUserLoadChannelId();
  }
}
