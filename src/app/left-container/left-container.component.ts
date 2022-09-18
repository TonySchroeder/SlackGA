import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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


  constructor(public dialog: MatDialog, public firestore: FirebaseService) { }

  ngOnInit(): void {
    this.firestore.loadChannels();
  }

  openDialog(): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogAddChannelComponent, {
      maxWidth: '520px',
    });
  }

  setChannelId(channelId) {
    this.firestore.currentChannelId = channelId;
    this.firestore.currentUserMessageId = undefined;
  }

  setUserlId(channelId) {
    this.firestore.currentChannelId = channelId;
    this.firestore.currentUserMessageId = undefined;
  }

}

