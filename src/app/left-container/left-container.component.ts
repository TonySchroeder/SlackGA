import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { doc, updateDoc } from 'firebase/firestore';
import { DialogAddChannelComponent } from '../dialog/dialog-add-channel/dialog-add-channel.component';
import { FirebaseService } from '../service/firebase.service';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/services/user';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.scss']
})
export class LeftContainerComponent implements OnInit {

  displayFavorites = false;
  displayChannels = false;
  displayDirectMessage = false;
  public users: User[] = [];


  constructor(public dialog: MatDialog, public authService: AuthService, public store: FirebaseService, public firebase: Firestore, private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
    this.getChatUsersShown();
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


  public getChatUsersShown() {
    this.firestore
    .collection("users")
    .valueChanges( {idField: 'customIdName'} )
    .subscribe((changes: any) => {
      this.users = changes;
    });
  }
}
